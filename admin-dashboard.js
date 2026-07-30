// بيانات الدخول الافتراضية
const ADMIN_USER = "admin";
const ADMIN_PASS = "fakhama2026";

// التحقق من حالة الدخول عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('admin_logged_in');
    if (isLoggedIn === 'true') {
        showDashboard();
    }
});

// دالة تسجيل الدخول
function handleLogin(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة عند الضغط على زر الدخول
    
    const usernameInput = document.getElementById('login-username').value.trim();
    const passwordInput = document.getElementById('login-password').value.trim();

    if (usernameInput === ADMIN_USER && passwordInput === ADMIN_PASS) {
        localStorage.setItem('admin_logged_in', 'true');
        showDashboard();
    } else {
        alert('❌ اسم المستخدم أو كلمة المرور غير صحيحة!');
    }
}

// عرض لوحة التحكم وإخفاء شاشة الدخول
function showDashboard() {
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}

// دالة تسجيل الخروج
function handleLogout() {
    localStorage.removeItem('admin_logged_in');
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('login-container').style.display = 'flex';
}

// التنقل بين تبويبات اللوحة
function switchTab(tabName) {
    // إخفاء جميع التبويبات
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // إلغاء تفعيل الأزرار
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // تفعيل التبويب المختار
    const targetTab = document.getElementById(`${tabName}-tab`);
    if (targetTab) {
        targetTab.classList.add('active');
    }

    // تفعيل الزر المختار
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

// فتح وإغلاق القائمة الجانبية في الشاشات الصغيرة
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar) {
        sidebar.classList.toggle('active');
    }
}

// فتح وإغلاق نافذة إضافة منتج
function openAddProductModal() {
    document.getElementById('product-modal').classList.add('active');
}

function closeAddProductModal() {
    document.getElementById('product-modal').classList.remove('active');
}
