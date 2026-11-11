document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const cartCount = document.querySelector('.cart-count');

    // Search Action Functionality
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`আপনি অনুসন্ধান করছেন: ${query}`);
            // এখানে সার্চ রেজাল্ট পেজের লিংক ইন্টিগ্রেট করতে পারেন
        } else {
            alert('অনুগ্রহ করে প্রোডাক্টের নাম লিখুন।');
        }
    });

    // Enter Key Press for Search
    searchInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            searchBtn.click();
        }
    });

    // Demo Function: Add Item to Cart (অ্যাড কন্টেন্ট টেস্ট করার জন্য)
    let count = 0;
    function updateCart() {
        count++;
        cartCount.textContent = count;
    }
});
// Hero Section Interactive Handlers
document.addEventListener('DOMContentLoaded', () => {
    const shopBtn = document.querySelector('.shop-now-btn');

    if (shopBtn) {
        shopBtn.addEventListener('click', (e) => {
            // প্রয়োজন হলে এখানে পেজ স্ক্রোল বা রিডাইরেক্ট কোড যুক্ত করতে পারেন
            console.log('Shop Now button clicked');
        });
    }
});
// Catalog & Cart Interaction
document.addEventListener('DOMContentLoaded', () => {
    // Range Slider Value Update
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');

    if (priceRange && priceValue) {
        priceRange.addEventListener('input', (e) => {
            priceValue.textContent = Number(e.target.value).toLocaleString('bn-BD');
        });
    }

    // Add to Cart Button Click Logic
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartCountElement = document.querySelector('.cart-count');
    let currentCartCount = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentCartCount++;
            if (cartCountElement) {
                cartCountElement.textContent = currentCartCount;
            }
            alert('প্রোডাক্টটি সফলভাবে কার্টে যোগ করা হয়েছে!');
        });
    });
});
// Checkout & Order Form Handling
document.addEventListener('DOMContentLoaded', () => {
    const checkoutForm = document.getElementById('checkoutForm');
    const applyCouponBtn = document.getElementById('applyCoupon');
    const couponInput = document.getElementById('couponCode');

    // Coupon Code Logic Demo
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', () => {
            const code = couponInput.value.trim();
            if (code.toUpperCase() === 'DISCOUNT10') {
                alert('কুপন প্রয়োগ করা হয়েছে! ১০% ছাড় পাওয়া গেছে।');
            } else if (code === '') {
                alert('অনুগ্রহ করে কুপন কোডটি লিখুন।');
            } else {
                alert('অবৈধ কুপন কোড।');
            }
        });
    }

    // Submit Order Handling
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('fullName').value;
            const phone = document.getElementById('phone').value;
            const selectedPayment = document.querySelector('input[name="payment"]:checked').value;

            alert(`ধন্যবাদ ${name}! আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে।\nপেমেন্ট মেথড: ${selectedPayment.toUpperCase()}\nযোগাযোগ: ${phone}`);
            
            // ফর্ম রিবুট
            checkoutForm.reset();
        });
    }
});
// ProductController.java
package com.tronmart.ecommerce.controller;

import org.springframework.web.bind.annotation.*;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    // প্রোডাক্ট লিস্ট ফ্রন্টএন্ডে পাঠানোর Java API
    @GetMapping
    public List<String> getProducts() {
        return Arrays.asList(
            "স্মার্ট এলইডি টিভি ৪৩ ইঞ্চি", 
            "স্মার্ট রেফ্রিজারেটর ২৫০ লিটার", 
            "ব্লুটুথ সাউন্ডবার স্পিকার"
        );
    }
}