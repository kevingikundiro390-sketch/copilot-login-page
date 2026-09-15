// ============================================
// COOL LOGIN PAGE - Interactive Design
// ============================================

const app = {
  init() {
    this.setupDOM();
    this.attachEventListeners();
    this.createParticles();
  },

  setupDOM() {
    // Create the entire login page structure
    document.body.innerHTML = `
      <div class="login-container">
        <!-- Animated Background -->
        <div class="particles-bg" id="particlesBg"></div>
        
        <!-- Floating Shapes -->
        <div class="floating-shape shape-1"></div>
        <div class="floating-shape shape-2"></div>
        <div class="floating-shape shape-3"></div>

        <!-- Main Login Box -->
        <div class="login-box">
          <div class="login-header">
            <div class="logo-circle">
              <span class="logo-icon">✨</span>
            </div>
            <h1 class="login-title">Welcome Back</h1>
            <p class="login-subtitle">Enter your credentials to continue</p>
          </div>

          <form class="login-form" id="loginForm">
            <!-- Email Input -->
            <div class="form-group">
              <div class="input-wrapper">
                <input 
                  type="email" 
                  id="email" 
                  class="form-input" 
                  placeholder="your@email.com"
                  required
                >
                <label class="input-label">Email Address</label>
                <div class="input-line"></div>
              </div>
              <span class="error-message" id="emailError"></span>
            </div>

            <!-- Password Input -->
            <div class="form-group">
              <div class="input-wrapper">
                <input 
                  type="password" 
                  id="password" 
                  class="form-input" 
                  placeholder="••••••••"
                  required
                >
                <label class="input-label">Password</label>
                <div class="input-line"></div>
                <button type="button" class="toggle-password" id="togglePassword">👁️</button>
              </div>
              <span class="error-message" id="passwordError"></span>
            </div>

            <!-- Remember Me & Forgot Password -->
            <div class="form-footer">
              <label class="checkbox-label">
                <input type="checkbox" id="remember">
                <span>Remember me</span>
              </label>
              <a href="#" class="forgot-link">Forgot Password?</a>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="login-btn">
              <span class="btn-text">Sign In</span>
              <span class="btn-loader"></span>
            </button>
          </form>

          <!-- Social Login -->
          <div class="divider">
            <span>Or continue with</span>
          </div>

          <div class="social-login">
            <button class="social-btn google-btn" title="Sign in with Google">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
            <button class="social-btn github-btn" title="Sign in with GitHub">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </button>
            <button class="social-btn twitter-btn" title="Sign in with Twitter">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.45 7-7 7-7a4.5 4.5 0 00-4.5-4.5z"/>
              </svg>
            </button>
          </div>

          <!-- Sign Up Link -->
          <p class="signup-link">
            Don't have an account? <a href="#">Create one</a>
          </p>
        </div>

        <!-- Success Message -->
        <div class="success-message" id="successMessage">
          <div class="success-icon">✓</div>
          <p>Login successful!</p>
        </div>
      </div>
    `;

    // Add styles
    this.addStyles();
  },

  attachEventListeners() {
    const form = document.getElementById('loginForm');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');
    const socialButtons = document.querySelectorAll('.social-btn');

    // Form submission
    form.addEventListener('submit', (e) => this.handleLogin(e));

    // Real-time validation
    emailInput.addEventListener('blur', () => this.validateEmail());
    passwordInput.addEventListener('blur', () => this.validatePassword());

    // Toggle password visibility
    togglePassword.addEventListener('click', () => {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      togglePassword.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    });

    // Input focus effects
    [emailInput, passwordInput].forEach(input => {
      input.addEventListener('focus', () => input.parentElement.classList.add('focused'));
      input.addEventListener('blur', () => {
        if (!input.value) {
          input.parentElement.classList.remove('focused');
        }
      });
    });

    // Social login buttons
    socialButtons.forEach(btn => {
      btn.addEventListener('click', (e) => this.handleSocialLogin(e));
    });
  },

  validateEmail() {
    const email = document.getElementById('email');
    const errorEl = document.getElementById('emailError');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!email.value) {
      errorEl.textContent = 'Email is required';
      return false;
    } else if (!regex.test(email.value)) {
      errorEl.textContent = 'Please enter a valid email';
      return false;
    } else {
      errorEl.textContent = '';
      return true;
    }
  },

  validatePassword() {
    const password = document.getElementById('password');
    const errorEl = document.getElementById('passwordError');
    
    if (!password.value) {
      errorEl.textContent = 'Password is required';
      return false;
    } else if (password.value.length < 6) {
      errorEl.textContent = 'Password must be at least 6 characters';
      return false;
    } else {
      errorEl.textContent = '';
      return true;
    }
  },

  handleLogin(e) {
    e.preventDefault();
    
    if (!this.validateEmail() || !this.validatePassword()) {
      return;
    }

    const btn = document.querySelector('.login-btn');
    btn.classList.add('loading');
    btn.disabled = true;

    // Simulate API call
    setTimeout(() => {
      btn.classList.remove('loading');
      document.getElementById('loginForm').reset();
      document.getElementById('successMessage').classList.add('show');
      
      setTimeout(() => {
        document.getElementById('successMessage').classList.remove('show');
      }, 3000);
    }, 2000);
  },

  handleSocialLogin(e) {
    e.preventDefault();
    const btn = e.currentTarget;
    btn.classList.add('clicked');
    
    setTimeout(() => {
      btn.classList.remove('clicked');
    }, 600);
  },

  createParticles() {
    const container = document.getElementById('particlesBg');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        width: ${Math.random() * 3 + 1}px;
        height: ${Math.random() * 3 + 1}px;
        animation-delay: ${Math.random() * 2}s;
        animation-duration: ${Math.random() * 3 + 2}s;
      `;
      container.appendChild(particle);
    }
  },

  addStyles() {
    const style = document.createElement('style');
    style.textContent = `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }

      .login-container {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .particles-bg {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }

      .particle {
        position: absolute;
        background: rgba(255, 255, 255, 0.5);
        border-radius: 50%;
        animation: float linear infinite;
      }

      @keyframes float {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) translateX(100px); opacity: 0; }
      }

      .floating-shape {
        position: absolute;
        opacity: 0.1;
        border-radius: 50%;
      }

      .shape-1 {
        width: 300px;
        height: 300px;
        background: white;
        top: -150px;
        left: -150px;
        animation: pulse 6s ease-in-out infinite;
      }

      .shape-2 {
        width: 200px;
        height: 200px;
        background: white;
        bottom: -100px;
        right: -100px;
        animation: pulse 8s ease-in-out infinite 1s;
      }

      .shape-3 {
        width: 150px;
        height: 150px;
        background: white;
        top: 50%;
        right: -75px;
        animation: pulse 7s ease-in-out infinite 2s;
      }

      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.2); }
      }

      .login-box {
        position: relative;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border-radius: 20px;
        padding: 50px 40px;
        width: 100%;
        max-width: 400px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        z-index: 10;
        animation: slideUp 0.6s ease-out;
      }

      @keyframes slideUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .login-header {
        text-align: center;
        margin-bottom: 40px;
      }

      .logo-circle {
        width: 70px;
        height: 70px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto 20px;
        animation: bounce 2s ease-in-out infinite;
      }

      @keyframes bounce {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-10px); }
      }

      .logo-icon {
        font-size: 40px;
      }

      .login-title {
        font-size: 28px;
        color: #333;
        margin-bottom: 10px;
      }

      .login-subtitle {
        font-size: 14px;
        color: #999;
      }

      .login-form {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 5px;
      }

      .input-wrapper {
        position: relative;
      }

      .form-input {
        width: 100%;
        padding: 12px 15px;
        border: none;
        background: #f5f5f5;
        border-radius: 10px;
        font-size: 14px;
        color: #333;
        transition: all 0.3s ease;
        outline: none;
      }

      .form-input:focus {
        background: #efefef;
        box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
      }

      .input-label {
        position: absolute;
        top: 12px;
        left: 15px;
        font-size: 12px;
        color: #999;
        pointer-events: none;
        transition: all 0.3s ease;
        opacity: 0;
      }

      .input-wrapper.focused .form-input {
        background: #efefef;
      }

      .input-wrapper.focused .input-label {
        opacity: 1;
        transform: translateY(-20px);
        color: #667eea;
        font-weight: 600;
      }

      .input-line {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        transition: width 0.3s ease;
      }

      .form-input:focus ~ .input-line {
        width: 100%;
      }

      .toggle-password {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        cursor: pointer;
        font-size: 18px;
        opacity: 0.7;
        transition: opacity 0.3s;
      }

      .toggle-password:hover {
        opacity: 1;
      }

      .error-message {
        font-size: 12px;
        color: #e74c3c;
        min-height: 16px;
      }

      .form-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 13px;
        margin: 10px 0 20px;
      }

      .checkbox-label {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        color: #666;
        transition: color 0.3s;
      }

      .checkbox-label input[type="checkbox"] {
        width: 16px;
        height: 16px;
        cursor: pointer;
        accent-color: #667eea;
      }

      .checkbox-label:hover {
        color: #333;
      }

      .forgot-link {
        color: #667eea;
        text-decoration: none;
        transition: color 0.3s;
      }

      .forgot-link:hover {
        color: #764ba2;
      }

      .login-btn {
        padding: 12px 30px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        margin-top: 10px;
      }

      .login-btn:hover:not(.loading) {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(102, 126, 234, 0.4);
      }

      .login-btn:active:not(.loading) {
        transform: translateY(0);
      }

      .login-btn.loading {
        pointer-events: none;
      }

      .login-btn.loading .btn-text {
        opacity: 0;
      }

      .btn-loader {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 18px;
        height: 18px;
        border: 2px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
        opacity: 0;
      }

      .login-btn.loading .btn-loader {
        opacity: 1;
      }

      @keyframes spin {
        to { transform: translate(-50%, -50%) rotate(360deg); }
      }

      .divider {
        display: flex;
        align-items: center;
        gap: 15px;
        margin: 25px 0;
        font-size: 13px;
        color: #999;
      }

      .divider::before,
      .divider::after {
        content: '';
        flex: 1;
        height: 1px;
        background: #ddd;
      }

      .social-login {
        display: flex;
        gap: 12px;
        justify-content: center;
      }

      .social-btn {
        width: 45px;
        height: 45px;
        border-radius: 10px;
        border: 1px solid #e0e0e0;
        background: white;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.3s ease;
        color: #333;
      }

      .social-btn:hover {
        border-color: #667eea;
        color: #667eea;
        transform: translateY(-3px);
        box-shadow: 0 8px 15px rgba(102, 126, 234, 0.2);
      }

      .social-btn.clicked {
        transform: scale(0.95);
      }

      .signup-link {
        text-align: center;
        font-size: 13px;
        color: #666;
        margin-top: 20px;
      }

      .signup-link a {
        color: #667eea;
        text-decoration: none;
        font-weight: 600;
        transition: color 0.3s;
      }

      .signup-link a:hover {
        color: #764ba2;
      }

      .success-message {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 40px 60px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        z-index: 1000;
        opacity: 0;
        transform: translate(-50%, -50%) scale(0.8);
        transition: all 0.3s ease;
        pointer-events: none;
      }

      .success-message.show {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
        pointer-events: auto;
      }

      .success-icon {
        font-size: 50px;
        margin-bottom: 15px;
      }

      .success-message p {
        font-size: 18px;
        font-weight: 600;
      }

      @media (max-width: 480px) {
        .login-box {
          margin: 20px;
          padding: 40px 25px;
        }

        .login-title {
          font-size: 24px;
        }

        .form-footer {
          flex-direction: column;
          gap: 10px;
          align-items: flex-start;
        }

        .social-login {
          gap: 10px;
        }

        .social-btn {
          width: 40px;
          height: 40px;
        }
      }
    `;
    document.head.appendChild(style);
  }
};

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => app.init());
