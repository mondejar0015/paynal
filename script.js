document.addEventListener('DOMContentLoaded', function() {
    // Create more floating elements
    createFloatingElements();
    // Menu data
    const menuItems = [
        {
            id: 1,
            name: 'Classic Burger',
            price: 150,
            category: 'burger',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYawV7ubtd7CwzGJOF7bAY_QKb-XaL7ucDDA&s'
        },
        {
            id: 2,
            name: 'Cheese Burger',
            price: 180,
            category: 'burger',
            image: 'https://img.freepik.com/free-psd/juicy-cheeseburger-gourmet-burger-perfection_632498-25274.jpg?semt=ais_hybrid&w=740'
        },
        {
            id: 3,
            name: 'Double Patty Burger',
            price: 220,
            category: 'burger',
            image: 'https://png.pngtree.com/png-clipart/20240310/original/pngtree-tasty-double-patty-burger-isolated-png-image_14552993.png'
        },
        {
            id: 4,
            name: 'Chicken Burger',
            price: 170,
            category: 'burger',
            image: 'https://static.vecteezy.com/system/resources/previews/049/350/247/non_2x/a-delicious-double-chicken-burger-isolated-on-transparent-background-png.png'
        },
        {
            id: 5,
            name: 'Veggie Burger',
            price: 160,
            category: 'burger',
            image: 'https://i.pinimg.com/736x/97/da/26/97da268ca85129275b94af124e9862ed.jpg'
        },
        {
            id: 6,
            name: 'Coke',
            price: 40,
            category: 'drink',
            image: 'https://www.freeiconspng.com/thumbs/coca-cola-png/bottle-coca-cola-png-transparent-2.png'
        },
        {
            id: 7,
            name: 'Iced Tea',
            price: 50,
            category: 'drink',
            image: 'Iced Tea.png'
        },
        {
            id: 8,
            name: 'Lemonade',
            price: 55,
            category: 'drink',
            image: 'https://www.pngarts.com/files/4/Lemonade-PNG-Image-Transparent.png'
        },
        {
            id: 9,
            name: 'Milkshake',
            price: 90,
            category: 'drink',
            image: 'https://png.pngtree.com/png-clipart/20240809/original/pngtree-vanilla-milkshake-transparent-background-png-image_15734940.png'
        },
        {
            id: 10,
            name: 'Coffee',
            price: 70,
            category: 'drink',
            image: 'https://www.transparentpng.com/download/coffee/Vlg8de-coffee-mug.png'
        },
        {
            id: 11,
            name: 'French Fries',
            price: 80,
            category: 'side',
            image: 'https://img.freepik.com/premium-photo/french-fries-dish_70216-3873.jpg?semt=ais_hybrid&w=740'
        },
        {
            id: 12,
            name: 'Onion Rings',
            price: 85,
            category: 'side',
            image: 'https://img.favpng.com/1/20/2/burger-king-onion-rings-hamburger-french-fries-bagel-png-favpng-3aHfs0YiAyprX6trSx5NbzShx_t.jpg'
        },
        {
            id: 13,
            name: 'Chicken Nuggets',
            price: 120,
            category: 'side',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlTa0-kYrI8oh-To4HP6ouxAZ6eGJvpinFw&s'
        },
        {
            id: 14,
            name: 'Coleslaw',
            price: 65,
            category: 'side',
            image: 'https://flamingwrapandgo.com/wp-content/uploads/2023/03/659-6595587_coleslaw-transparent-potato-salad-png-png-download-1.png'
        },
        {
            id: 15,
            name: 'Mozzarella Sticks',
            price: 110,
            category: 'side',
            image: 'https://img.freepik.com/premium-psd/mozzarella-sticks-plat-white-plate-isolated-transparent-background_1232542-72182.jpg'
        
        },
        {
            id: 16,
            name: 'Ice Cream',
            price: 90,
            category: 'dessert',
            image: 'https://t3.ftcdn.net/jpg/06/83/49/20/360_F_683492015_eP2HPHYSB5y9o5gVirrJlJRqLUEhFYHC.jpg'
        
        }, 
        {
            id: 17,
            name: 'Brownie',
            price: 50,
            category: 'dessert',
            image: 'https://png.pngtree.com/png-vector/20240724/ourlarge/pngtree-3d-homemade-vegan-brownies-and-dairy-png-image_13231314.png'
        
        }, 
        {
            id: 18,
            name: 'Slice Cake',
            price: 65,
            category: 'dessert',
            image: 'https://img.pikbest.com/png-images/20241027/vanilla-cake-slice-isolated-on-transparent-or-white-background-png_11012226.png!sw800'
        
        },
        {
            id: 19,
            name: 'Leche Flan',
            price: 40,
            category: 'dessert',
            image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgXBwTjnu-XRz71JWKAdz5QHNP7NYKHjyNkFj4P4DONwHJoIagnaabf0vjIebJgf0CXkYHwTTeOjcIbSBNWTqkUBKIKODAqhPKnEnIQLYCvTA0-FT8M6dJGjCsPdfYKt7wNz74BY_y6a3Q/s1600/Leche-Flan.jpg'
        
        }
    ];

    // App state
    let cart = [];
    let activeCategory = 'all';
    let currentOrderNumber = generateOrderNumber();
    let selectedPaymentMethod = '';
    let orderTotal = 0;

    // Elements
    const itemsGrid = document.querySelector('.items-grid');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const orderList = document.getElementById('order-list');
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    const checkoutBtn = document.getElementById('checkout-btn');
    const paymentModal = document.getElementById('payment-modal');
    const receiptModal = document.getElementById('receipt-modal');
    const paymentOptions = document.querySelectorAll('.payment-option');
    const paymentForms = document.querySelectorAll('.payment-form');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    
    const cashAmountInput = document.getElementById('cash-amount');
    const cashTotalElement = document.getElementById('cash-total');
    const changeAmountElement = document.getElementById('change-amount');
    const cashPayBtn = document.getElementById('cash-pay-btn');
    
    const gcashAmountElement = document.getElementById('gcash-amount');
    const gcashPayBtn = document.getElementById('gcash-pay-btn');
    
    const cardAmountElement = document.getElementById('card-amount');
    const cardPayBtn = document.getElementById('card-pay-btn');
    
    const receiptDateElement = document.getElementById('receipt-date');
    const receiptTimeElement = document.getElementById('receipt-time');
    const receiptItemsList = document.getElementById('receipt-items-list');
    const receiptSubtotalElement = document.getElementById('receipt-subtotal');
    const receiptTaxElement = document.getElementById('receipt-tax');
    const receiptTotalElement = document.getElementById('receipt-total');
    const receiptPaymentMethodElement = document.getElementById('receipt-payment-method');
    const receiptPaidElement = document.getElementById('receipt-paid');
    const receiptChangeElement = document.getElementById('receipt-change');
    const receiptChangeRowElement = document.getElementById('receipt-change-row');
    const receiptOrderNumberElement = document.getElementById('receipt-order-number');
    const printReceiptBtn = document.getElementById('print-receipt');
    const newOrderBtn = document.getElementById('new-order');

    // Initialize
    displayMenuItems();
    
    // Event listeners
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            setActiveCategory(button.dataset.category);
        });
    });

    paymentOptions.forEach(option => {
        option.addEventListener('click', () => {
            selectPaymentMethod(option.dataset.payment);
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            closeAllModals();
        });
    });

    checkoutBtn.addEventListener('click', openPaymentModal);
    
    cashAmountInput.addEventListener('input', updateChangeAmount);
    cashPayBtn.addEventListener('click', processCashPayment);
    gcashPayBtn.addEventListener('click', processGcashPayment);
    cardPayBtn.addEventListener('click', processCardPayment);
    
    printReceiptBtn.addEventListener('click', printReceipt);
    newOrderBtn.addEventListener('click', startNewOrder);

    // Menu item display functions
    function displayMenuItems() {
        itemsGrid.innerHTML = '';
        
        const filteredItems = activeCategory === 'all' 
            ? menuItems 
            : menuItems.filter(item => item.category === activeCategory);
        
        filteredItems.forEach(item => {
            const itemElement = createMenuItemElement(item);
            itemsGrid.appendChild(itemElement);
        });
    }

    function createMenuItemElement(item) {
        const itemElement = document.createElement('div');
        itemElement.className = 'menu-item';
        itemElement.dataset.id = item.id;
        
        itemElement.innerHTML = `
            <div class="item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-price">₱${item.price.toFixed(2)}</div>
            </div>
        `;
        
        itemElement.addEventListener('click', () => addToCart(item));
        return itemElement;
    }

    function setActiveCategory(category) {
        activeCategory = category;
        
        // Update active button
        categoryButtons.forEach(button => {
            if (button.dataset.category === category) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
        
        displayMenuItems();
    }

    // Cart functions
    function addToCart(item) {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...item,
                quantity: 1
            });
        }
        
        updateCartDisplay();
    }

    function removeFromCart(itemId) {
        cart = cart.filter(item => item.id !== itemId);
        updateCartDisplay();
    }

    function updateQuantity(itemId, newQuantity) {
        const item = cart.find(item => item.id === itemId);
        
        if (item) {
            if (newQuantity <= 0) {
                removeFromCart(itemId);
            } else {
                item.quantity = newQuantity;
                updateCartDisplay();
            }
        }
    }

    function updateCartDisplay() {
        if (cart.length === 0) {
            orderList.innerHTML = `
                <div class="empty-cart">
                    <i class="fas fa-shopping-cart"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
            checkoutBtn.disabled = true;
        } else {
            orderList.innerHTML = '';
            cart.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'order-item';
                itemElement.dataset.id = item.id;
                
                itemElement.innerHTML = `
                    <div class="order-item-info">
                        <div class="order-item-name">${item.name}</div>
                        <div class="order-item-price">₱${(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                    <div class="order-item-controls">
                        <div class="quantity-control">
                            <button class="qty-btn decrease">-</button>
                            <div class="qty-value">${item.quantity}</div>
                            <button class="qty-btn increase">+</button>
                        </div>
                        <i class="fas fa-trash remove-item"></i>
                    </div>
                `;
                
                orderList.appendChild(itemElement);
                
                // Add event listeners
                const decreaseBtn = itemElement.querySelector('.decrease');
                const increaseBtn = itemElement.querySelector('.increase');
                const removeBtn = itemElement.querySelector('.remove-item');
                
                decreaseBtn.addEventListener('click', () => {
                    updateQuantity(item.id, item.quantity - 1);
                });
                
                increaseBtn.addEventListener('click', () => {
                    updateQuantity(item.id, item.quantity + 1);
                });
                
                removeBtn.addEventListener('click', () => {
                    removeFromCart(item.id);
                });
            });
            
            checkoutBtn.disabled = false;
        }
        
        updateOrderSummary();
    }

    function updateOrderSummary() {
        const subtotal = calculateSubtotal();
        const tax = subtotal * 0.12; // 12% tax
        const total = subtotal + tax;
        
        orderTotal = total;
        
        subtotalElement.textContent = `₱${subtotal.toFixed(2)}`;
        taxElement.textContent = `₱${tax.toFixed(2)}`;
        totalElement.textContent = `₱${total.toFixed(2)}`;
        
        // Update payment amounts
        if (cashTotalElement) cashTotalElement.textContent = `₱${total.toFixed(2)}`;
        if (gcashAmountElement) gcashAmountElement.textContent = `₱${total.toFixed(2)}`;
        if (cardAmountElement) cardAmountElement.textContent = `₱${total.toFixed(2)}`;
    }

    function calculateSubtotal() {
        return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }

    // Payment functions
    function openPaymentModal() {
        paymentModal.style.display = 'block';
        // Reset payment mode
        selectedPaymentMethod = '';
        resetPaymentForms();
        
        paymentOptions.forEach(option => {
            option.classList.remove('selected');
        });
        
        paymentForms.forEach(form => {
            form.style.display = 'none';
        });
    }

    function selectPaymentMethod(method) {
        selectedPaymentMethod = method;
        
        // Update UI
        paymentOptions.forEach(option => {
            if (option.dataset.payment === method) {
                option.classList.add('selected');
            } else {
                option.classList.remove('selected');
            }
        });
        
        // Show appropriate form
        paymentForms.forEach(form => {
            form.style.display = 'none';
        });
        
        const selectedForm = document.getElementById(`${method}-payment`);
        if (selectedForm) {
            selectedForm.style.display = 'block';
        }
        
        // Reset inputs
        if (method === 'cash') {
            cashAmountInput.value = '';
            changeAmountElement.textContent = 'Change: ₱0.00';
            cashPayBtn.disabled = true;
        }
    }

    function updateChangeAmount() {
        const cashAmount = parseFloat(cashAmountInput.value) || 0;
        const change = cashAmount - orderTotal;
        
        if (change >= 0) {
            changeAmountElement.textContent = `Change: ₱${change.toFixed(2)}`;
            cashPayBtn.disabled = false;
        } else {
            changeAmountElement.textContent = `Insufficient amount`;
            cashPayBtn.disabled = true;
        }
    }

    function processCashPayment() {
        const cashAmount = parseFloat(cashAmountInput.value) || 0;
        
        if (cashAmount >= orderTotal) {
            const change = cashAmount - orderTotal;
            
            // Show payment processing indicator
            const processingIndicator = document.createElement('div');
            processingIndicator.className = 'payment-processing';
            processingIndicator.innerHTML = `
                <div class="loader"></div>
                <p>Processing payment...</p>
            `;
            
            document.getElementById('cash-payment').appendChild(processingIndicator);
            cashPayBtn.disabled = true;
            
            // Simulate processing
            setTimeout(() => {
                showReceipt('Cash', cashAmount, change);
            }, 1500);
        }
    }

    function processGcashPayment() {
        // Show payment processing
        document.querySelector('#gcash-payment .payment-processing').style.display = 'block';
        gcashPayBtn.disabled = true;
        
        // Simulate GCash payment processing
        setTimeout(() => {
            showReceipt('GCash', orderTotal, 0);
        }, 2000);
    }

    function processCardPayment() {
        // Show payment processing
        document.querySelector('#card-payment .payment-processing').style.display = 'block';
        cardPayBtn.disabled = true;
        
        // Simulate card payment processing
        setTimeout(() => {
            showReceipt('Card', orderTotal, 0);
        }, 2000);
    }

    function resetPaymentForms() {
        // Reset cash payment
        if (cashAmountInput) cashAmountInput.value = '';
        if (changeAmountElement) changeAmountElement.textContent = 'Change: ₱0.00';
        if (cashPayBtn) cashPayBtn.disabled = true;
        
        // Hide processing indicators
        document.querySelectorAll('.payment-processing').forEach(el => {
            el.style.display = 'none';
        });
        
        // Re-enable buttons
        if (gcashPayBtn) gcashPayBtn.disabled = false;
        if (cardPayBtn) cardPayBtn.disabled = false;
    }

    // Receipt functions
    function showReceipt(paymentMethod, amountPaid, change) {
        closeAllModals();
        
        const now = new Date();
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const timeOptions = { hour: '2-digit', minute: '2-digit' };
        
        receiptDateElement.textContent = now.toLocaleDateString('en-US', dateOptions);
        receiptTimeElement.textContent = now.toLocaleTimeString('en-US', timeOptions);
        
        // Populate receipt items
        receiptItemsList.innerHTML = '';
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'receipt-item';
            itemElement.innerHTML = `
                <span>${item.name}</span>
                <span>${item.quantity}</span>
                <span>₱${(item.price * item.quantity).toFixed(2)}</span>
            `;
            receiptItemsList.appendChild(itemElement);
        });
        
        // Update summary
        const subtotal = calculateSubtotal();
        const tax = subtotal * 0.12;
        
        receiptSubtotalElement.textContent = `₱${subtotal.toFixed(2)}`;
        receiptTaxElement.textContent = `₱${tax.toFixed(2)}`;
        receiptTotalElement.textContent = `₱${orderTotal.toFixed(2)}`;
        
        // Handle payment method specific display
        receiptPaymentMethodElement.querySelector('span:first-child').textContent = `Paid via ${paymentMethod}`;
        receiptPaidElement.textContent = `₱${amountPaid.toFixed(2)}`;
        
        if (change > 0) {
            receiptChangeRowElement.style.display = 'flex';
            receiptChangeElement.textContent = `₱${change.toFixed(2)}`;
        } else {
            receiptChangeRowElement.style.display = 'none';
        }
        
        receiptOrderNumberElement.textContent = currentOrderNumber;
        
        // Show receipt modal
        receiptModal.style.display = 'block';
    }

    function printReceipt() {
        // Simulate printing
        const receiptContent = document.querySelector('.receipt').cloneNode(true);
        
        // Get rid of buttons
        const buttons = receiptContent.querySelectorAll('button');
        buttons.forEach(button => button.remove());
        
        const printWindow = window.open('', '_blank');
        
        if (printWindow) {
            printWindow.document.write(`
                <html>
                <head>
                    <title>Receipt #${currentOrderNumber}</title>
                    <style>
                        body {
                            font-family: 'Courier New', monospace;
                            padding: 20px;
                            max-width: 300px;
                            margin: 0 auto;
                        }
                        .receipt-header {
                            text-align: center;
                            margin-bottom: 20px;
                            padding-bottom: 10px;
                            border-bottom: 1px dashed #ccc;
                        }
                        .receipt-item {
                            display: grid;
                            grid-template-columns: 2fr 1fr 1fr;
                            padding: 5px 0;
                        }
                        .receipt-item.header {
                            font-weight: bold;
                            border-bottom: 1px solid #000;
                            margin-bottom: 10px;
                        }
                        .receipt-summary {
                            margin-top: 20px;
                            padding-top: 10px;
                            border-top: 1px dashed #ccc;
                        }
                        .summary-row {
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 5px;
                        }
                        .total {
                            font-weight: bold;
                        }
                        .receipt-footer {
                            text-align: center;
                            margin-top: 20px;
                            padding-top: 10px;
                            border-top: 1px dashed #ccc;
                        }
                    </style>
                </head>
                <body>
                    ${receiptContent.outerHTML}
                    <script>
                        setTimeout(() => window.print(), 500);
                    </script>
                </body>
                </html>
            `);
            printWindow.document.close();
        }
    }

    function startNewOrder() {
        // Reset everything
        cart = [];
        currentOrderNumber = generateOrderNumber();
        updateCartDisplay();
        closeAllModals();
    }

    // Utility functions
    function closeAllModals() {
        paymentModal.style.display = 'none';
        receiptModal.style.display = 'none';
    }

    function generateOrderNumber() {
        // Simple order number format: date + random 3 digit number
        const date = new Date();
        const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
        const randomNum = Math.floor(Math.random() * 900) + 100; // 3-digit random number
        return `${dateStr}-${randomNum}`;
    }

    // Close modals when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === paymentModal) {
            paymentModal.style.display = 'none';
        }
        if (event.target === receiptModal) {
            receiptModal.style.display = 'none';
        }
    });
    
    // Create floating food elements for background animation
    function createFloatingElements() {
        const floatingElements = document.querySelector('.floating-elements');
        const foodItems = [
            {
                class: 'burger-float',
                svg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="45" fill="%23F5A623"/><rect x="20" y="40" width="60" height="8" rx="4" fill="%23713D16"/><rect x="25" y="52" width="50" height="12" rx="4" fill="%236B9E4E"/><rect x="15" y="65" width="70" height="10" rx="4" fill="%23713D16"/></svg>'
            },
            {
                class: 'fries-float',
                svg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect x="25" y="20" width="50" height="70" rx="4" fill="%23F5A623"/><rect x="30" y="10" width="5" height="65" rx="2" fill="%23F8E71C"/><rect x="40" y="5" width="5" height="70" rx="2" fill="%23F8E71C"/><rect x="50" y="8" width="5" height="67" rx="2" fill="%23F8E71C"/><rect x="60" y="12" width="5" height="63" rx="2" fill="%23F8E71C"/><rect x="70" y="15" width="5" height="60" rx="2" fill="%23F8E71C"/></svg>'
            },
            {
                class: 'drink-float',
                svg: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M30,20 L70,20 L65,90 L35,90 Z" fill="%234990E2"/><rect x="35" y="10" width="30" height="10" rx="3" fill="%23D8D8D8"/><rect x="48" y="5" width="4" height="10" rx="2" fill="%23979797"/></svg>'
            }
        ];
        
        // Add additional floating elements to the main content
        for (let i = 0; i < 5; i++) {
            const randomFood = foodItems[Math.floor(Math.random() * foodItems.length)];
            const element = document.createElement('div');
            element.className = `floating-item ${randomFood.class}`;
            
            // Random position and size
            const size = Math.floor(Math.random() * 30) + 20; // 20px to 50px
            element.style.width = `${size}px`;
            element.style.height = `${size}px`;
            
            // Position randomly in the main area
            element.style.left = `${Math.random() * 80 + 10}%`;
            element.style.top = `${Math.random() * 100 + 100}px`;
            
            // Custom animation
            const duration = Math.floor(Math.random() * 15) + 15; // 15s to 30s
            const delay = Math.floor(Math.random() * 10);
            
            element.style.animation = `float${Math.floor(Math.random() * 3) + 1} ${duration}s ease-in-out ${delay}s infinite`;
            element.style.opacity = '0.1';
            
            document.querySelector('main').appendChild(element);
        }
    }
});