<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>لوحة تحكم الإدارة - عطور الفخامة</title>
    
    <!-- مكتبة Supabase للربط بقاعدة البيانات -->
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
    <link rel="stylesheet" href="admin-dashboard.css">
</head>
<body>
    <!-- شاشة تسجيل الدخول -->
    <div class="login-container" id="login-container">
        <div class="login-box">
            <div class="login-header">
                <i class="fa-solid fa-crown"></i>
                <h1>لوحة التحكم</h1>
                <p>عطور الفخامة - النسخة الاحترافية</p>
            </div>
            <form onsubmit="handleLogin(event)">
                <div class="input-group">
                    <label>👤 اسم المستخدم:</label>
                    <input type="text" id="login-username" placeholder="أدخل اسم المستخدم" required>
                </div>
                <div class="input-group">
                    <label>🔐 كلمة المرور:</label>
                    <input type="password" id="login-password" placeholder="أدخل كلمة المرور" required>
                </div>
                <button type="submit" class="login-btn">دخول اللوحة 🔑</button>
            </form>
            <p class="login-hint">البيانات الافتراضية: admin / fakhama2026</p>
        </div>
    </div>

    <!-- لوحة التحكم الرئيسية -->
    <div class="dashboard" id="dashboard" style="display:none;">
        <!-- الهيدر العلوي -->
        <header class="dashboard-header">
            <div class="header-left">
                <button class="menu-toggle" onclick="toggleSidebar()">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <div class="logo-header">
                    <i class="fa-solid fa-crown"></i>
                    <span>عطور الفخامة</span>
                </div>
            </div>
            <div class="header-right">
                <div class="admin-info">
                    <span id="admin-name">مدير</span>
                    <i class="fa-solid fa-user-circle"></i>
                </div>
                <button class="logout-btn" onclick="handleLogout()">
                    <i class="fa-solid fa-sign-out-alt"></i> تسجيل خروج
                </button>
            </div>
        </header>

        <!-- الشريط الجانبي -->
        <aside class="sidebar" id="sidebar">
            <nav class="nav-menu">
                <button class="nav-item active" onclick="switchTab('dashboard')">
                    <i class="fa-solid fa-chart-line"></i>
                    <span>لوحة المعلومات</span>
                </button>
                <button class="nav-item" onclick="switchTab('products')">
                    <i class="fa-solid fa-box"></i>
                    <span>المنتجات</span>
                </button>
                <button class="nav-item" onclick="switchTab('orders')">
                    <i class="fa-solid fa-shopping-cart"></i>
                    <span>الطلبات</span>
                </button>
                <button class="nav-item" onclick="switchTab('reports')">
                    <i class="fa-solid fa-file-pdf"></i>
                    <span>التقارير</span>
                </button>
                <button class="nav-item" onclick="switchTab('settings')">
                    <i class="fa-solid fa-cog"></i>
                    <span>الإعدادات</span>
                </button>
            </nav>
        </aside>

        <!-- المحتوى الرئيسي -->
        <main class="main-content">
            <!-- لوحة المعلومات -->
            <section class="tab-content active" id="dashboard-tab">
                <div class="page-header">
                    <h2>📊 لوحة المعلومات</h2>
                    <p>ملخص شامل لمتجرك</p>
                </div>

                <div class="stats-grid">
                    <div class="stat-card">
                        <div class="stat-icon" style="background: #3498db;">
                            <i class="fa-solid fa-box"></i>
                        </div>
                        <div class="stat-info">
                            <p class="stat-label">عدد المنتجات</p>
                            <p class="stat-value" id="stat-products">0</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon" style="background: #2ecc71;">
                            <i class="fa-solid fa-shopping-cart"></i>
                        </div>
                        <div class="stat-info">
                            <p class="stat-label">عدد الطلبات</p>
                            <p class="stat-value" id="stat-orders">0</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon" style="background: #e74c3c;">
                            <i class="fa-solid fa-dollar-sign"></i>
                        </div>
                        <div class="stat-info">
                            <p class="stat-label">إجمالي المبيعات</p>
                            <p class="stat-value" id="stat-sales">0 دج</p>
                        </div>
                    </div>

                    <div class="stat-card">
                        <div class="stat-icon" style="background: #f39c12;">
                            <i class="fa-solid fa-star"></i>
                        </div>
                        <div class="stat-info">
                            <p class="stat-label">أفضل عطر</p>
                            <p class="stat-value" id="stat-best">-</p>
                        </div>
                    </div>
                </div>

                <div class="recent-section">
                    <h3>🆕 آخر الطلبات</h3>
                    <div id="recent-orders" class="recent-orders-list">
                        <p style="text-align:center; color:#999;">لا توجد طلبات حالياً</p>
                    </div>
                </div>
            </section>

            <!-- إدارة المنتجات -->
            <section class="tab-content" id="products-tab">
                <div class="page-header">
                    <h2>📦 إدارة المنتجات</h2>
                    <button class="btn-primary" onclick="openAddProductModal()">
                        <i class="fa-solid fa-plus"></i> إضافة منتج جديد
                    </button>
                </div>

                <div class="products-section">
                    <input type="text" id="products-search" placeholder="🔍 ابحث عن منتج..." class="search-input" oninput="filterProducts()">
                    <div id="products-list" class="products-table">
                        <!-- المنتجات تظهر هنا -->
                    </div>
                </div>
            </section>

            <!-- إدارة الطلبات -->
            <section class="tab-content" id="orders-tab">
                <div class="page-header">
                    <h2>🛒 إدارة الطلبات</h2>
                    <div class="filter-buttons">
                        <button class="filter-btn active" onclick="filterOrders('all')">الكل</button>
                        <button class="filter-btn" onclick="filterOrders('pending')">قيد الانتظار</button>
                        <button class="filter-btn" onclick="filterOrders('completed')">مكتملة</button>
                    </div>
                </div>

                <div id="orders-list" class="orders-table">
                    <!-- الطلبات تظهر هنا -->
                </div>
            </section>

            <!-- التقارير والإحصائيات -->
            <section class="tab-content" id="reports-tab">
                <div class="page-header">
                    <h2>📄 التقارير والإحصائيات</h2>
                </div>

                <div class="reports-grid">
                    <div class="report-card">
                        <h3>📋 تقرير المنتجات</h3>
                        <p>تنزيل قائمة كاملة بجميع المنتجات</p>
                        <button class="btn-primary" onclick="exportProductsToPDF()">
                            <i class="fa-solid fa-file-pdf"></i> تنزيل PDF
                        </button>
                    </div>

                    <div class="report-card">
                        <h3>📊 تقرير الطلبات</h3>
                        <p>تنزيل تقرير شامل بجميع الطلبات</p>
                        <button class="btn-primary" onclick="exportOrdersToPDF()">
                            <i class="fa-solid fa-file-pdf"></i> تنزيل PDF
                        </button>
                    </div>

                    <div class="report-card">
                        <h3>💰 تقرير المبيعات</h3>
                        <p>إحصائيات شاملة عن مبيعاتك</p>
                        <button class="btn-primary" onclick="exportSalesReportPDF()">
                            <i class="fa-solid fa-file-pdf"></i> تنزيل PDF
                        </button>
                    </div>
                </div>
            </section>

            <!-- الإعدادات -->
            <section class="tab-content" id="settings-tab">
                <div class="page-header">
                    <h2>⚙️ الإعدادات</h2>
                </div>

                <div class="settings-grid">
                    <div class="settings-card">
                        <h3>🔐 تغيير كلمة المرور</h3>
                        <div class="input-group">
                            <label>كلمة المرور الحالية:</label>
                            <input type="password" id="current-password" placeholder="أدخل كلمة المرور الحالية">
                        </div>
                        <div class="input-group">
                            <label>كلمة المرور الجديدة:</label>
                            <input type="password" id="new-password" placeholder="أدخل كلمة المرور الجديدة">
                        </div>
                        <button class="btn-primary" onclick="changePassword()">تحديث</button>
                    </div>

                    <div class="settings-card">
                        <h3>📱 بيانات التواصل</h3>
                        <div class="input-group">
                            <label>رقم WhatsApp:</label>
                            <input type="text" id="whatsapp-number" placeholder="مثال: 213656708603">
                        </div>
                        <div class="input-group">
                            <label>رقم CCP البريدي:</label>
                            <input type="text" id="ccp-number" placeholder="مثال: 123456789012">
                        </div>
                        <button class="btn-primary" onclick="saveContactInfo()">حفظ</button>
                    </div>

                    <div class="settings-card">
                        <h3>📧 معلومات المتجر</h3>
                        <div class="input-group">
                            <label>بريد إلكتروني:</label>
                            <input type="email" id="store-email" placeholder="qdwryyhyy644@gmail.com">
                        </div>
                        <div class="input-group">
                            <label>اسم المتجر:</label>
                            <input type="text" id="store-name" placeholder="عطور الفخامة">
                        </div>
                        <button class="btn-primary" onclick="saveStoreInfo()">حفظ</button>
                    </div>
                </div>
            </section>
        </main>
    </div>

    <!-- Modal لإضافة منتج -->
    <div class="modal" id="product-modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>إضافة منتج جديد</h2>
                <button class="close-modal" onclick="closeAddProductModal()">✕</button>
            </div>
            <form onsubmit="handleAddProduct(event)">
                <div class="input-group">
                    <label>اسم العطر:</label>
                    <input type="text" id="modal-product-name" required>
                </div>
                <div class="input-group">
                    <label>التصنيف:</label>
                    <select id="modal-product-category" required>
                        <option value="عطور رجالية">عطور رجالية</option>
                        <option value="عطور نسائية">عطور نسائية</option>
                        <option value="عطور صيفية">عطور صيفية</option>
                        <option value="عطور شتوية">عطور شتوية</option>
                    </select>
                </div>
                <div class="input-group">
                    <label>السعر (دج):</label>
                    <input type="number" id="modal-product-price" required>
                </div>
                <div class="input-group">
                    <label>الكمية:</label>
                    <input type="number" id="modal-product-stock" required>
                </div>
                <div class="input-group">
                    <label>وصف المنتج:</label>
                    <textarea id="modal-product-description" placeholder="أدخل وصف تفصيلي للمنتج..." rows="4" style="width: 100%; padding: 10px; background: #1a1a1a; border: 1px solid #333; border-radius: 6px; color: #fff; text-align: right; font-family: Arial; resize: vertical;"></textarea>
                </div>
                <div class="input-group">
                    <label>الصورة:</label>
                    <input type="file" id="modal-product-image" accept="image/*" onchange="previewProductImage(this)">
                    <img id="product-image-preview" class="image-preview">
                </div>
                <button type="submit" class="btn-primary">إضافة المنتج</button>
            </form>
        </div>
    </div>

    <!-- ملف الـ JavaScript الخاص بـ لوحة التحكم -->
    <script src="admin-dashboard.js"></script>
</body>
</html>
