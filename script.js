let products = JSON.parse(localStorage.getItem('perfume_products')) || [];
let cart = [];

document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});

function displayProducts(items) {
    const wrapper = document.getElementById('products-wrapper');
    wrapper.innerHTML = '';
    
    if(items.length === 0) {
        wrapper.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#555; padding:20px;">لا توجد عطور حالياً.</p>`;
        return;
    }

    items.forEach(product => {
        // إذا لم تكن هناك صورة، يتم وضع صورة مؤقتة فخمة
        const imgSrc = product.image ? product.image : 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400';
        
        wrapper.innerHTML += `
            <div class="product-card">
                <img src="${imgSrc}" alt="${product.name}">
                <div class="product-name">${product.name}</div>
                <div class="product-stock">الكمية: ${product.stock}</div>
                <div class="product-price">${product.price} دج</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">إضافة للسلة</button>
            </div>
        `;
    });
}

function toggleRightNav() {
    document.getElementById('right-sidebar').classList.toggle('open');
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product || product.stock <= 0) return alert('هذا العطر غير متوفر حالياً!');

    const cartItem = cart.find(item => item.id === productId);
    if (cartItem) {
        cartItem.qty++;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count-badge').innerText = cart.reduce((acc, item) => acc + item.qty, 0);
    const container = document.getElementById('sidebar-cart-items');
    container.innerHTML = '';
    
    let total = 0;
    cart.forEach(item => {
        total += (item.price * item.qty);
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:13px;">
                <span>${item.name} (x${item.qty})</span>
                <span style="color:#d4af37">${item.price * item.qty} دج</span>
            </div>
        `;
    });
    document.getElementById('cart-total-price').innerText = total;
}

function filterProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
}

function filterCategory(cat) {
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    if (cat === 'all') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === cat);
        displayProducts(filtered);
    }
}

function openCheckoutModal() {
    if (cart.length === 0) return alert('سلتك فارغة!');
    document.getElementById('checkout-modal').classList.add('open');
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').classList.remove('open');
}

function togglePaymentDetails(type) {
    document.getElementById('baridi-details-box').style.display = (type === 'baridimob') ? 'block' : 'none';
}

function copyCCP() {
    const num = document.getElementById('admin-ccp-num').innerText;
    navigator.clipboard.writeText(num);
    alert('تم نسخ رقم الحساب الجاري الخاص بالأدمن!');
}

// متغير عام لتخزين الملف المرفوع
let uploadedFile = null;

// دالة للتعامل مع رفع الملف
function handleFileUpload(event) {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files[0]) {
        uploadedFile = fileInput.files[0];
        console.log('تم اختيار ملف:', uploadedFile.name);
    }
}

// ربط حدث التغيير برفع الملف
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('buyer-file-proof');
    if (fileInput) {
        fileInput.addEventListener('change', handleFileUpload);
    }
});

function handleOrderSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('customer-name').value;
    const city = document.getElementById('customer-city').value;
    const address = document.getElementById('customer-address').value;
    const phone = document.getElementById('customer-phone').value;
    const method = document.querySelector('input[name="payment_method"]:checked').value;
    
    let cartText = cart.map(item => `- ${item.name} (العدد: ${item.qty})`).join('%0A');
    let total = document.getElementById('cart-total-price').innerText;

    let message = `*طلب جديد من متجر عطور الفخامة* 👑%0A%0A`;
    message += `*معلومات الزبون:*%0A`;
    message += `👤 الاسم: ${name}%0A`;
    message += `📍 المدينة: ${city}%0A`;
    message += `🏠 العنوان: ${address}%0A`;
    message += `📞 الهاتف: ${phone}%0A%0A`;
    message += `*المنتجات المطلوبة:*%0A${cartText}%0A%0A`;
    message += `💰 الإجمالي: ${total} دج%0A`;
    message += `💳 طريقة الدفع: ${method === 'baridimob' ? 'بريدي موب' : 'الدفع عند الاستلام'}%0A`;

    if (method === 'baridimob') {
        const buyerCCP = document.getElementById('buyer-ccp').value;
        const buyerAmount = document.getElementById('buyer-amount').value;
        const receiptNum = document.getElementById('buyer-receipt-num').value;
        
        message += `%0A*بيانات دفع بريدي موب للزبون:*%0A`;
        message += `🔢 الحساب المودع منه: ${buyerCCP}%0A`;
        message += `💵 المبلغ المودع: ${buyerAmount} دج%0A`;
        message += `🧾 رقم الوصل: ${receiptNum}%0A`;
    }

    const adminWhatsApp = "213656708603";
    
    // إذا كان هناك ملف مرفوع
    if (uploadedFile) {
        // تحويل الملف إلى Base64
        const reader = new FileReader();
        reader.onload = function(e) {
            const base64File = e.target.result;
            
            // حفظ الطلب مع الملف
            let orders = JSON.parse(localStorage.getItem('perfume_orders')) || [];
            const newOrder = {
                id: Date.now(),
                customerName: name,
                city: city,
                address: address,
                phone: phone,
                cartItems: cart,
                total: parseInt(total),
                paymentMethod: method,
                fileData: base64File, // حفظ الملف بصيغة Base64
                fileName: uploadedFile.name,
                date: new Date().toISOString(),
                status: 'pending'
            };
            
            if (method === 'baridimob') {
                newOrder.buyerCCP = document.getElementById('buyer-ccp').value;
                newOrder.buyerAmount = document.getElementById('buyer-amount').value;
                newOrder.receiptNum = document.getElementById('buyer-receipt-num').value;
            }
            
            orders.push(newOrder);
            localStorage.setItem('perfume_orders', JSON.stringify(orders));
            
            // إنشاء رسالة إضافية تشير إلى الملف
            message += `%0A📎 *الملف المرفق:* ${uploadedFile.name}`;
            
            // إرسال الرسالة الأولى مع البيانات والإشارة إلى الملف
            window.open(`https://wa.me/${adminWhatsApp}?text=${message}`, '_blank');
            
            // عرض رسالة للمستخدم
            setTimeout(() => {
                alert(`✅ تم إرسال الطلب بنجاح!\n\n📎 اسم الملف: ${uploadedFile.name}\n\nيمكنك الآن ارسال الملف عبر واتساب مباشرة من جهازك.`);
                
                cart = [];
                updateCartUI();
                closeCheckoutModal();
                uploadedFile = null;
                document.getElementById('buyer-file-proof').value = '';
            }, 500);
        };
        reader.readAsDataURL(uploadedFile);
    } else {
        // إذا لم يكن هناك ملف، أرسل الرسالة فقط
        let orders = JSON.parse(localStorage.getItem('perfume_orders')) || [];
        const newOrder = {
            id: Date.now(),
            customerName: name,
            city: city,
            address: address,
            phone: phone,
            cartItems: cart,
            total: parseInt(total),
            paymentMethod: method,
            date: new Date().toISOString(),
            status: 'pending'
        };
        
        if (method === 'baridimob') {
            newOrder.buyerCCP = document.getElementById('buyer-ccp').value;
            newOrder.buyerAmount = document.getElementById('buyer-amount').value;
            newOrder.receiptNum = document.getElementById('buyer-receipt-num').value;
        }
        
        orders.push(newOrder);
        localStorage.setItem('perfume_orders', JSON.stringify(orders));
        
        window.open(`https://wa.me/${adminWhatsApp}?text=${message}`, '_blank');
        
        alert('✅ تم إرسال الطلب بنجاح!');
        cart = [];
        updateCartUI();
        closeCheckoutModal();
    }
}
