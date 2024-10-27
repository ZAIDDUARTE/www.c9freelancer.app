// navbar.js
document.addEventListener("DOMContentLoaded", function () {
    const navbarHTML = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <!-- Tailwind CSS CDN -->
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

</head>
<body class="bg-white">
    

      <div class="container mx-auto">
        <nav class="flex items-center justify-between p-4">
            <div class="flex items-center">
                <img 
                    alt="Company Logo" 
                    class="h-10 w-10" 
                    src="/assets/Firefox_Screenshot_2024-10-26T10-24-33.505Z.png" 
                />
                <span class="ml-2 text-xl font-semibold text-gray-800">C9Freelancer</span>
            </div>
    
            <!-- Desktop Navigation -->
            <div class="hidden md:flex space-x-8">
                <a class="text-gray-800 hover:text-gray-600" href="/index.html">Home</a>
                <a class="text-gray-800 hover:text-gray-600" href="/about.html">About</a>
                <a class="text-gray-800 hover:text-gray-600" href="/how-it-works.html">How It Works</a>
                <a class="text-gray-800 hover:text-gray-600" href="/contact-us.html">Contact Us</a>
            </div>
    
            <!-- Buttons and Hamburger Icon -->
            <div class="flex items-center space-x-4">
                <button class="bg-green-500 text-white px-4 py-2 rounded hidden md:block">Join Now</button>
                <button class="border border-green-500 text-green-500 px-4 py-2 rounded hidden md:block">Sign In</button>
                <button id="menu-toggle" class="md:hidden focus:outline-none">
                    <svg class="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>
        </nav>
    
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden flex flex-col space-y-2 p-4 hidden">
            <a class="text-gray-800 hover:text-gray-600" href="#">Home</a>
            <a class="text-gray-800 hover:text-gray-600" href="#">About</a>
            <a class="text-gray-800 hover:text-gray-600" href="#">How It Works</a>
            <a class="text-gray-800 hover:text-gray-600" href="#">Contact Us</a>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Join Now</button>
            <button class="border border-green-500 text-green-500 px-4 py-2 rounded">Sign In</button>
        </div>
    </div>
    

<!-- JavaScript for toggle functionality -->
<script>
    document.getElementById('menu-toggle').addEventListener('click', function() {
        const mobileMenu = document.getElementById('mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });
</script>

    `;
    document.getElementById("navbar").innerHTML = navbarHTML;
  });
  