// Kaya Performance Website - Advanced Animations & Interactions

// Check if GSAP is available
if (typeof gsap === 'undefined') {
    console.error('GSAP not loaded!');
} else {
    console.log('GSAP loaded successfully');
    // Register GSAP plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    console.log('GSAP plugins registered');
}

// Global variables
let cursor, cursorFollower;
let isTouch = window.matchMedia('(max-width: 768px)').matches;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing website...');
    
    // Remove no-js class if JavaScript is working
    document.body.classList.remove('no-js');
    
    try {
        initPreloader();
        console.log('Preloader initialized');
        
        if (!isTouch) {
            initCustomCursor();
            console.log('Custom cursor initialized');
        }
        
        if (typeof gsap !== 'undefined') {
            initGSAPAnimations();
            console.log('GSAP animations initialized');
            
            initScrollTriggerAnimations();
            console.log('ScrollTrigger animations initialized');
            
            initParallaxEffects();
            console.log('Parallax effects initialized');
        } else {
            console.warn('GSAP not available, skipping GSAP animations');
        }
        
        initTiltEffects();
        console.log('Tilt effects initialized');
        
        initMagneticButtons();
        console.log('Magnetic buttons initialized');
        
        initCounterAnimations();
        console.log('Counter animations initialized');
        
        initFormHandling();
        console.log('Form handling initialized');
        
        initSmoothScrolling();
        console.log('Smooth scrolling initialized');
        
        console.log('All features initialized successfully!');
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// Preloader animation
function initPreloader() {
    // Simple fade out preloader if exists
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        gsap.to(preloader, {
            opacity: 0,
            duration: 0.5,
            delay: 0.5,
            onComplete: () => preloader.remove()
        });
    }
}

// Custom cursor
function initCustomCursor() {
    // Create cursor elements
    cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
    
    cursorFollower = document.createElement('div');
    cursorFollower.className = 'cursor-follower';
    document.body.appendChild(cursorFollower);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let followerX = 0, followerY = 0;
    
    // Mouse move handler
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        gsap.to(cursor, {
            x: mouseX,
            y: mouseY,
            duration: 0.1,
            ease: "power2.out"
        });
    });
    
    // Animate cursor follower
    gsap.ticker.add(() => {
        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;
        
        gsap.set(cursorFollower, {
            x: followerX,
            y: followerY
        });
    });
    
    // Show cursors on first mouse move
    document.addEventListener('mousemove', () => {
        gsap.to([cursor, cursorFollower], {
            opacity: 1,
            duration: 0.3
        });
    }, { once: true });
    
    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .product-card, .testimonial-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, {
                scale: 1.5,
                backgroundColor: '#264653',
                duration: 0.3
            });
            gsap.to(cursorFollower, {
                scale: 0.5,
                duration: 0.3
            });
        });
        
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: '#264653',
                duration: 0.3
            });
            gsap.to(cursorFollower, {
                scale: 1,
                duration: 0.3
            });
        });
    });
}

// Main GSAP animations
function initGSAPAnimations() {
    // Hero animations
    const heroTl = gsap.timeline();
    
    heroTl.from('.hero-logo', {
        y: 50,
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)"
    })
    .from('.hero-title', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
    }, "-=0.5")
    .from('.hero-subtitle', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out"
    }, "-=0.4")
    .from('.scroll-indicator', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    }, "-=0.3");
}

// ScrollTrigger animations
function initScrollTriggerAnimations() {
    // Section titles
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: title,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    // Reveal animations
    gsap.utils.toArray('.reveal-up').forEach(el => {
        gsap.from(el, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    gsap.utils.toArray('.reveal-left').forEach(el => {
        gsap.from(el, {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    gsap.utils.toArray('.reveal-right').forEach(el => {
        gsap.from(el, {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    gsap.utils.toArray('.reveal-scale').forEach(el => {
        gsap.from(el, {
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: el,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    // Stagger animations
    gsap.utils.toArray('.reveal-stagger').forEach((el, index) => {
        gsap.from(el, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    // Product cards animation
    gsap.utils.toArray('.product-card').forEach((card, index) => {
        gsap.from(card, {
            y: 50,
            scale: 0.9,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    // Testimonial cards animation
    gsap.utils.toArray('.testimonial-card').forEach((card, index) => {
        gsap.from(card, {
            y: 50,
            opacity: 0,
            duration: 0.8,
            delay: index * 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// Parallax effects
function initParallaxEffects() {
    // Hero background parallax
    gsap.to('.hero-bg', {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
    
    // Community background parallax
    gsap.to('.community-bg', {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
            trigger: ".community",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        }
    });
    
    // Parallax images
    gsap.utils.toArray('.parallax-image').forEach(img => {
        gsap.to(img, {
            yPercent: -15,
            ease: "none",
            scrollTrigger: {
                trigger: img,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    });
    
    // Floating elements
    gsap.utils.toArray('.floating').forEach(el => {
        gsap.to(el, {
            y: -10,
            duration: 2,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
        });
    });
}

// Tilt effects for cards
function initTiltEffects() {
    if (isTouch) return; // Skip on mobile
    
    const tiltElements = document.querySelectorAll('[data-tilt]');
    
    tiltElements.forEach(el => {
        let bounds, centerX, centerY;
        
        const updateBounds = () => {
            bounds = el.getBoundingClientRect();
            centerX = bounds.left + bounds.width / 2;
            centerY = bounds.top + bounds.height / 2;
        };
        
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const deltaX = (mouseX - centerX) / (bounds.width / 2);
            const deltaY = (mouseY - centerY) / (bounds.height / 2);
            
            const rotateX = deltaY * -10;
            const rotateY = deltaX * 10;
            
            gsap.to(el, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.5,
                ease: "power2.out",
                transformPerspective: 1000
            });
        };
        
        const handleMouseLeave = () => {
            gsap.to(el, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        };
        
        el.addEventListener('mouseenter', updateBounds);
        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);
        
        window.addEventListener('resize', updateBounds);
    });
}

// Magnetic button effects
function initMagneticButtons() {
    if (isTouch) return;
    
    const magneticElements = document.querySelectorAll('.magnetic-btn');
    
    magneticElements.forEach(el => {
        let bounds;
        
        const updateBounds = () => {
            bounds = el.getBoundingClientRect();
        };
        
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const centerX = bounds.left + bounds.width / 2;
            const centerY = bounds.top + bounds.height / 2;
            
            const deltaX = (mouseX - centerX) * 0.3;
            const deltaY = (mouseY - centerY) * 0.3;
            
            gsap.to(el, {
                x: deltaX,
                y: deltaY,
                duration: 0.3,
                ease: "power2.out"
            });
        };
        
        const handleMouseLeave = () => {
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        };
        
        el.addEventListener('mouseenter', updateBounds);
        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);
    });
}

// Counter animations
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    if (typeof gsap !== 'undefined' && counters.length > 0) {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            
            gsap.from({ count: 0 }, {
                count: target,
                duration: 2,
                ease: "power2.out",
                onUpdate: function() {
                    counter.textContent = Math.round(this.targets()[0].count);
                },
                scrollTrigger: {
                    trigger: counter,
                    start: "top 80%",
                    once: true
                }
            });
        });
    } else {
        // Fallback: immediately show the target numbers
        counters.forEach(counter => {
            const target = counter.getAttribute('data-count');
            counter.textContent = target;
        });
    }
    
    // Animate progress bars
    initProgressBars();
    
    // Animate analytics charts
    initAnalyticsCharts();
}

// Progress bar animations
function initProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    
    if (typeof gsap !== 'undefined' && progressBars.length > 0) {
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-progress');
            
            gsap.to(bar, {
                width: `${targetWidth}%`,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: bar,
                    start: "top 80%",
                    once: true
                }
            });
        });
    } else {
        // Fallback: immediately set progress
        progressBars.forEach(bar => {
            const targetWidth = bar.getAttribute('data-progress');
            bar.style.width = `${targetWidth}%`;
        });
    }
}

// Analytics chart animations
function initAnalyticsCharts() {
    // Animate comparison chart bars
    const barFills = document.querySelectorAll('.bar-fill');
    if (typeof gsap !== 'undefined' && barFills.length > 0) {
        barFills.forEach(bar => {
            const targetWidth = bar.getAttribute('data-value');
            
            gsap.to(bar, {
                width: `${targetWidth}%`,
                duration: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: bar,
                    start: "top 80%",
                    once: true
                }
            });
        });
    }
    
    // Animate circular progress bars
    const circularProgress = document.querySelectorAll('.circular-progress');
    if (typeof gsap !== 'undefined' && circularProgress.length > 0) {
        circularProgress.forEach(circle => {
            const percentage = circle.getAttribute('data-percentage');
            const progressBar = circle.querySelector('.progress-bar');
            const circumference = 2 * Math.PI * 45; // radius = 45
            const offset = circumference - (percentage / 100) * circumference;
            
            gsap.fromTo(progressBar, {
                strokeDashoffset: circumference
            }, {
                strokeDashoffset: offset,
                duration: 2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: circle,
                    start: "top 80%",
                    once: true
                }
            });
        });
    }
    
    // Animate timeline bars (recovery section)
    const timelineBars = document.querySelectorAll('.timeline-bar');
    if (typeof gsap !== 'undefined' && timelineBars.length > 0) {
        timelineBars.forEach((bar, index) => {
            const beforeBar = bar.parentElement.classList.contains('before-kaya');
            const targetWidth = beforeBar ? '80%' : '50%';
            
            gsap.to(bar, {
                '::before': {
                    width: targetWidth
                },
                duration: 1.5,
                delay: index * 0.3,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: bar,
                    start: "top 80%",
                    once: true
                }
            });
        });
    }
}

// Form handling
function initFormHandling() {
    const emailForm = document.querySelector('.email-signup');
    
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('.email-input');
            const submitBtn = this.querySelector('.signup-btn');
            const email = emailInput.value.trim();
            
            // Validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!email) {
                showFormMessage('Please enter your email address.', 'error');
                return;
            }
            
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }
            
            // Animation during submission
            gsap.to(submitBtn, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
            
            submitBtn.textContent = 'Connecting...';
            submitBtn.disabled = true;
            
            // Simulate submission
            setTimeout(() => {
                showFormMessage('Thank you for subscribing!', 'success');
                emailInput.value = '';
                submitBtn.textContent = 'Subscribe';
                submitBtn.disabled = false;
            }, 1500);
        });
    }
}

// Form message display with animation
function showFormMessage(message, type) {
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        gsap.to(existingMessage, {
            opacity: 0,
            y: -10,
            duration: 0.3,
            onComplete: () => existingMessage.remove()
        });
    }
    
    const messageEl = document.createElement('div');
    messageEl.className = `form-message form-message--${type}`;
    messageEl.textContent = message;
    
    // Style the message
    messageEl.style.cssText = `
        margin-top: 1rem;
        padding: 1rem;
        border-radius: 8px;
        text-align: center;
        font-family: var(--font-accent);
        font-size: 0.9rem;
        opacity: 0;
        transform: translateY(10px);
        ${type === 'success' ? 
            'background-color: rgba(205, 228, 232, 0.2); color: #264653; border: 1px solid #264653;' : 
            'background-color: rgba(255, 0, 0, 0.1); color: #ff0000; border: 1px solid rgba(255, 0, 0, 0.3);'
        }
    `;
    
    const emailForm = document.querySelector('.email-signup');
    emailForm.appendChild(messageEl);
    
    // Animate in
    gsap.to(messageEl, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "back.out(1.7)"
    });
    
    // Auto remove
    setTimeout(() => {
        if (messageEl.parentNode) {
            gsap.to(messageEl, {
                opacity: 0,
                y: -10,
                duration: 0.3,
                onComplete: () => messageEl.remove()
            });
        }
    }, 5000);
}

// Smooth scrolling
function initSmoothScrolling() {
    // Scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            gsap.to(window, {
                duration: 1.5,
                scrollTo: { y: "#about", offsetY: 80 },
                ease: "power2.inOut"
            });
        });
    }
    
    // All anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: { y: target, offsetY: 80 },
                    ease: "power2.inOut"
                });
            }
        });
    });
}

// Navbar effects
function initNavbarEffects() {
    const nav = document.querySelector('.nav');
    
    ScrollTrigger.create({
        start: "top -100",
        end: 99999,
        toggleClass: { className: "nav--scrolled", targets: nav }
    });
    
    // Hide/show navbar
    let lastScrollY = 0;
    ScrollTrigger.create({
        onUpdate: self => {
            const currentScrollY = self.scroll();
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                gsap.to(nav, {
                    y: "-100%",
                    duration: 0.3,
                    ease: "power2.inOut"
                });
            } else {
                gsap.to(nav, {
                    y: "0%",
                    duration: 0.3,
                    ease: "power2.inOut"
                });
            }
            lastScrollY = currentScrollY;
        }
    });
}

// Initialize navbar effects
document.addEventListener('DOMContentLoaded', function() {
    initNavbarEffects();
});

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// Performance optimization
function optimizeForPerformance() {
    // Reduce motion for users who prefer it
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        gsap.globalTimeline.timeScale(0);
        ScrollTrigger.batch("*", { once: true });
    }
    
    // Pause animations when tab is not visible
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            gsap.globalTimeline.pause();
        } else {
            gsap.globalTimeline.play();
        }
    });
}