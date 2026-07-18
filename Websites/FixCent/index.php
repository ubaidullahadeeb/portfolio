<?php
include "config.php";
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="FIXO - Expert AC services connecting customers with skilled technicians for installation, repair, maintenance, and cleaning.">
    <title>FIXO - AC Services & Repairs in Lahore</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/Cstyale.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/input.css">
</head>

<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light sticky-top shadow-sm" style="background-color: #FFF8EC;">
        <div class="container-fluid px-4">
            <div class="d-flex align-items-center nav-top-row">
                <a class="navbar-brand d-flex align-items-center fixcent-logo" href="index.php">
                    <!-- Icon / Symbol -->
                    <img src="images/Group 263.png" alt="FixCent Icon" class="fixcent-icon">
                    <!-- Text -->
                    <div class="logo-shadow text-dark " style="font-weight: bold;">
                        <span class="fs-7">FixN</span><span class="fs-8">cent</span>
                    </div>
                </a>
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto align-items-center gap-3">
                    <li class="nav-item"><a class="nav-link fw-500 active" href="index.html">Home</a></li>
                    <li class="nav-item"><a class="nav-link fw-500" href="about.html">About</a></li>
                    <li class="nav-item"><a class="nav-link fw-500" href="services.html">Services</a></li>
                    <li class="nav-item"><a class="nav-link fw-500" href="contact.html">Contact Us</a></li>
                    <li class="nav-item"><a class="nav-link fw-500" href="blog.html">Blog</a></li>
                    <li class="nav-item dropdown">
                        <button
                            class="btn btn-link dropdown-toggle d-flex align-items-center gap-1 text-dark text-decoration-none"
                            type="button" id="cityDropdown" data-bs-toggle="dropdown" aria-expanded="false">

                            <!-- SVG Location Icon (100% reliable) -->
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                            </svg>

                            <span id="selectedCity">Lahore</span>
                        </button>

                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="cityDropdown">
                            <li><a class="dropdown-item city-option" href="#">Lahore</a></li>
                            <li><a class="dropdown-item city-option" href="#">Kasure</a></li>
                            <li><a class="dropdown-item city-option" href="#">Islamabad</a></li>
                            <li><a class="dropdown-item city-option" href="#">Faisalabad</a></li>
                            <li><a class="dropdown-item city-option" href="#">Multan</a></li>
                        </ul>
                    </li>

                    <li class="nav-item me-2">
                        <a href="#" class="nav-link p-0">
                            <button class="btn btn-primary btn-sm cart-btn d-flex align-items-center gap-1"
                                data-bs-toggle="modal" data-bs-target="#cartModal">

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 
                .49.598l-1.5 7A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.49-.402L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5z" />
                                    <path d="M3.5 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                </svg>

                                <span class="d-none d-lg-inline">Cart</span>
                            </button>
                        </a>
                    </li>
<!-- phplogic -->
                    <?php if (!isset($_SESSION['user_id'])): ?>

                        <!-- Guest User -->
                        <li class="nav-item">
                            <a href="login.php" class="nav-link">
                                <button class="btn btn-primary btn-sm text-white">
                                    Login / Signup
                                </button>
                            </a>
                        </li>

                    <?php else: ?>

                        <!-- Logged-in User -->
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle d-flex align-items-center gap-2" href="#" role="button"
                                data-bs-toggle="dropdown">

                                <i class="fas fa-user-circle fs-4"></i>
                            </a>

                            <ul class="dropdown-menu dropdown-menu-end shadow">
                                <li class="dropdown-header fw-bold">
                                    <?= $_SESSION['user_name']; ?>
                                </li>

                                <?php if (!empty($_SESSION['city'])): ?>
                                    <li>
                                        <span class="dropdown-item-text text-muted">
                                            <?= $_SESSION['city']; ?>
                                        </span>
                                    </li>
                                <?php endif; ?>

                                <li>
                                    <hr class="dropdown-divider">
                                </li>

                                <li>
                                    <a class="dropdown-item text-danger" href="logout.php">
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </li>

                    <?php endif; ?>

                </ul>
            </div>
        </div>
    </nav>
    <div class="modal fade" id="cartModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down">
            <div class="modal-content cart-modal">

                <div class="modal-header">
                    <h5 class="modal-title fw-bold">🛒 Select Items</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>

                <div class="modal-body">

                    <!-- Search -->
                    <input type="text" id="cartSearchInput" class="form-control mb-3" placeholder="Search items...">

                    <!-- Items -->
                    <div class="row g-3">

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">
                                <span>AC Services</span>
                                <img src="images/2.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">
                                <span>Geyser Services</span>
                                <img src="images/4.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">

                                <span>Electrician Services</span>
                                <img src="images/3.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">

                                <span>Plumber Services</span>
                                <img src="images/5.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">
                                <span>Handyman</span>
                                <img src="images/6.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">
                                <span>Carpenter Services</span>
                                <img src="images/7.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">

                                <span>Painter Services</span>
                                <img src="images/servicesi/Rectangle 181.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">

                                <span>Past Control</span>
                                <img src="images/home-s/Rectangle 116.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>
                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">
                                <span>Appliance Services</span>
                                <img src="images/servicesi/Rectangle 125.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">
                                <span>Explain Complain</span>
                                <img src="images/servicesi/young-bearded-handsome-builder-wearing-construction-uniform-cap-standing-with-arms-crossed-self-confident-smiling-isolated-orange-wall 1.png"
                                    alt="">
                                <input type="checkbox">
                            </label>
                        </div>
                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">
                                <span>Deep Cleaning Services</span>
                                <img src="images/servicesi/Rectangle 88.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">
                                <span>Inspection Services</span>
                                <img src="images/servicesi/Rectangle 183.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">

                                <span>Waterproofing Services</span>
                                <img src="images/home-s/membranes 1.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>

                        <div class="col-md-6 cart-item-wrap">
                            <label class="cart-item-tile">

                                <span>It Networking Services</span>
                                <img src="images/itNetwork-s/CCTV Installation 1.png" alt="">
                                <input type="checkbox">
                            </label>
                        </div>
                    </div>
                </div>


                <div class="modal-footer">
                    <button class="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button class="btn btn-primary">Proceed</button>
                </div>

            </div>
        </div>
    </div>



    <!-- Hero Section -->
    <section class="hero-section bg-primary text-white position-relative overflow-hidden">
        <div class="container-fluid px-4">
            <div class="row align-items-center min-vh-75">
                <div class="col-lg-6 col-md-12 fade-in-left">
                    <div class="mb-4">
                        <input type="text" id="serviceSearch" class="form-control form-control-lg search-box"
                            placeholder="Search services...">

                    </div>
                    <h1 class="display-4 fw-bold lh-tight mb-3">It's your universe, <br>It's time to save it</h1>
                    <p class="lead mb-4">Connecting customers and technicians for quick,<br> safe, and affordable
                        bookings.
                    </p>
                    <a href="contact.html" class="btn btn-light btn-lg fw-bold text-primary">Contact Us <i
                            class="fas fa-arrow-right ms-2"></i></a>
                </div>
                <div class="col-lg-6 col-md-12 fade-in-right position-relative">
                    <div class="technician-shape"></div>
                    <img src="images/l3 1.png" alt="Professional AC Technician" class="img-fluid hero-image">
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="services-section py-5 bg-light">
        <div class="container-fluid px-4">
            <div class="text-center mb-5 fade-in-up">
                <h2 class="display-5 fw-bold mb-2">Services</h2>
                <p class="text-muted lead">Choose from our wide range of services</p>
            </div>

            <div class="row g-4 justify-content-center">
                <!-- AC Installation -->
                <div class="col-6 col-lg-4 fade-in-up service-item" style="animation-delay: 0.1s;">
                    <div class="service-card h-100">
                        <img src="images/home-s/Rectangle 69.png" alt="AC Installation" class="card-img-top">
                        <div class="card-body">
                            <div class="mb-2">
                                <span class="badge Co bg-primary me-2">Residential</span>
                                <span class="badge Col bg-info">Commercial</span>
                            </div>
                            <h5 class="card-title fw-bold">Maintenance Services</h5>
                            <p class="card-text text-muted small">Electrician, Plumber, Handy man, Carpenter Painter,
                                Pest Control, Home Appliance etc.</p>
                            <a href="services.html" class="btn btn-dark btn-sm fw-bold">Explore <i
                                    class="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>

                <!-- AC Repair -->
                <div class="col-6 col-lg-4 fade-in-up service-item" style="animation-delay: 0.2s;">
                    <div class="service-card h-100">
                        <img src="images/servicesi/Rectangle 129.png" alt="AC Repair" class="card-img-top">
                        <div class="card-body">
                            <div class="mb-2">
                                <span class="badge bg-primary me-2">Residential</span>
                                <span class="badge bg-info">Commercial</span>
                            </div>
                            <h5 class="card-title fw-bold">Construction Services</h5>
                            <p class="card-text text-muted small">New House Construction, Flooring & Tiling Work, Roof
                                Waterproofing / Insulation, Sanitary Work etc.</p>
                            <a href="constructions.html" class="btn btn-dark btn-sm fw-bold">Explore <i
                                    class="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-lg-4 fade-in-up service-item" style="animation-delay: 0.2s;">
                    <div class="service-card h-100">
                        <img src="images/servicesi/4.png" alt="AC Repair" class="card-img-top">
                        <div class="card-body">
                            <div class="mb-2">
                                <span class="badge bg-primary me-2">Residential</span>
                                <span class="badge bg-info">Commercial</span>
                            </div>
                            <h5 class="card-title fw-bold">Architect Services</h5>
                            <p class="card-text text-muted small">House Map / Layout Design, 3D Front Elevation Design,
                                Interior Design & Space Planning etc.</p>
                            <a href="architects.html" class="btn btn-dark btn-sm fw-bold">Explore <i
                                    class="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>

                <!-- AC Maintenance -->
                <div class="col-6 col-lg-4 fade-in-up service-item" style="animation-delay: 0.3s;">
                    <div class="service-card h-100">
                        <img src="images/servicesi/Rectangle 183.png" alt="AC Maintenance" class="card-img-top">
                        <div class="card-body">
                            <div class="mb-2">
                                <span class="badge bg-primary me-2">Residential</span>
                                <span class="badge bg-info">Commercial</span>
                            </div>
                            <h5 class="card-title fw-bold">Inspection Services</h5>
                            <p class="card-text text-muted small">3 to 5 Marlas, 1 Kanal, 2 Kanals etc.</p>
                            <a href="inspactions.html" class="btn btn-dark btn-sm fw-bold">Explore <i
                                    class="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>

                <!-- AC Gas Refill -->
                <div class="col-6 col-lg-4 fade-in-up service-item" style="animation-delay: 0.4s;">
                    <div class="service-card h-100">
                        <img src="images/servicesi/Rectangle 76.png" alt="AC Gas Refill" class="card-img-top">
                        <div class="card-body">
                            <div class="mb-2">
                                <span class="badge Co bg-primary me-2">Residential</span>
                                <span class="badge Col bg-info">Commercial</span>
                            </div>
                            <h5 class="card-title fw-bold">It Networking Services</h5>
                            <p class="card-text text-muted small">CCTV Installation, Smart Home System, Wi-Fi Setup,
                                Video Door Phone, Smart Locks etc.</p>
                            <a href="itnetworkings.html" class="btn btn-dark btn-sm fw-bold">Explore <i
                                    class="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>

                <!-- AC Cleaning -->
                <div class="col-6 col-lg-4 fade-in-up service-item" style="animation-delay: 0.5s;">
                    <div class="service-card h-100">
                        <img src="images/home-s/membranes 1.png" alt="AC Cleaning" class="card-img-top">
                        <div class="card-body">
                            <div class="mb-2">
                                <span class="badge bg-primary me-2">Residential</span>
                                <span class="badge bg-info">Commercial</span>
                            </div>
                            <h5 class="card-title fw-bold">Waterproofing Services</h5>
                            <p class="card-text text-muted small">Roof Waterproofing, Bathroom Waterproofing,
                                Basement, Terrace & Balcony etc.</p>
                            <a href="waterproofings.html" class="btn btn-dark btn-sm fw-bold">Explore <i
                                    class="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>

                <!-- AC Inspection -->
                <div class="col-6 col-lg-4 fade-in-up service-item" style="animation-delay: 0.6s;">
                    <div class="service-card h-100">
                        <img src="images/servicesi/Rectangle 88.png" alt="AC Inspection" class="card-img-top">
                        <div class="card-body">
                            <div class="mb-2">
                                <span class="badge bg-primary me-2">Residential</span>
                                <span class="badge bg-info">Commercial</span>
                            </div>
                            <h5 class="card-title fw-bold">Deep Cleaning Services</h5>
                            <p class="card-text text-muted small">Sofa Cleaning, Carpet Cleaning, Plastic Water Tank
                                Cleaning, Full House Deep Cleaning etc,</p>
                            <a href="cleanings.html" class="btn btn-dark btn-sm fw-bold">Explore <i
                                    class="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-6 col-lg-4 fade-in-up service-item" style="animation-delay: 0.6s;">
                    <div class="service-card h-100">
                        <img src="images/servicesi/Rectangle 125.png" alt="AC Inspection" class="card-img-top">
                        <div class="card-body">
                            <div class="mb-2">
                                <span class="badge bg-primary me-2">Residential</span>
                                <span class="badge bg-info">Commercial</span>
                            </div>
                            <h5 class="card-title fw-bold">Appliances Services</h5>
                            <p class="card-text text-muted small">Cooking Range Repairing, Automatic Washing Machine
                                Repairing, Oven Range Services etc.</p>
                            <a href="appliances.html" class="btn btn-dark btn-sm fw-bold">Explore <i
                                    class="fas fa-arrow-right ms-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <center>
        <h1 style="color: black; font-weight: bold; padding-top: 20px;">Tranding Services</h1>
    </center>
    <div class="container"
        style="background-color: #0053B5; padding-top: 20px;padding-bottom: 20px;padding-left: 20px; padding-right: 20px; border-radius: 5px;">

        <div class="row g-3" id="tsServiceGrid"></div>
    </div>
    <!-- Why Choose Us Section -->
    <section class="why-choose-section py-6">
        <div class="container">
            <div class="row"
                style="background-color: #FBF0DC; border-top-left-radius: 50px;border-bottom-left-radius: 50px;">
                <div class="col-lg-5">
                    <div class="app-mockup">
                        <img src="images/app 1.png" alt="App Mockup" class="mockup-image">
                    </div>
                </div>
                <div class="col-lg-6" style="padding-top: 30px; align-items: center;">
                    <h1 class="section-title mb-4">Why Choose Us?</h1>
                    <div class="choose-item mb-4">
                        <div class="choose-icon">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="choose-content">
                            <h6>Verified & Trained Technicians</h6>
                            <p>Connect you to verified and trained technicians</p>
                        </div>
                    </div>

                    <div class="choose-item mb-4">
                        <div class="choose-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <div class="choose-content">
                            <h6>Saves Your Time</h6>
                            <p>Through an easy and efficient booking process</p>
                        </div>
                    </div>

                    <div class="choose-item mb-4">
                        <div class="choose-icon">
                            <i class="fas fa-headset"></i>
                        </div>
                        <div class="choose-content">
                            <h6>Impeccable Customer Support</h6>
                            <p>Available 24/7 for your inquiries and support</p>
                        </div>
                    </div>

                    <div class="choose-item mb-4">
                        <div class="choose-icon">
                            <i class="fas fa-dollar-sign"></i>
                        </div>
                        <div class="choose-content">
                            <h6>Cost-Effectiveness</h6>
                            <p>Ensures competitive and transparent pricing</p>
                        </div>
                    </div>

                    <div class="choose-item mb-4">
                        <div class="choose-icon">
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="choose-content">
                            <h6>High-Quality & Safety</h6>
                            <p>Reliability and safety in every service we provide</p>
                        </div>
                    </div>

                    <div class="choose-item">
                        <div class="choose-icon">
                            <i class="fas fa-shield-alt"></i>
                        </div>
                        <div class="choose-content">
                            <h6>Secure Transactions</h6>
                            <p>Guaranteed secure and protected transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="complaint-section">
        <div class="complaint-container">

            <!-- Left Text -->
            <div class="complaint-left">
                <h2>Resolving your complaints!</h2>
                <p>
                    Leave your complaint here to help us<br>
                    make our services better for you.
                </p>
            </div>

            <!-- Right Form -->
            <div class="complaint-right">
                <form>
                    <div class="form-row">
                        <input type="text" placeholder="Enter your Name" required>
                        <input type="tel" placeholder="Enter your Phone Number" required>
                    </div>

                    <textarea placeholder="Message*" required></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    </section>



    <center>
        <h1 style="color:black;font-weight:bold;padding-top:20px;">
            Top Services
        </h1>
    </center>

    <div class="container" style="background-color:#0053B5;padding:20px;border-radius:5px;">

        <div class="row g-3" id="ttsServiceGrid"></div>

    </div>
    <footer class="footer py-5">
        <div class="container">
            <div class="row mb-5">
                <div class="col-lg-3 col-md-6 mb-4">
                    <h6 class="footer-title">Services</h6>
                    <ul class="footer-list">
                        <li><a href="#">Maintenance Services</a></li>
                        <li><a href="cservices.html">Construction Services</a></li>
                        <li><a href="architects.html">Architect Services</a></li>
                        <li><a href="inspactions.html">Inspection Services</a></li>
                        <li><a href="itnetworkings.html">IT Networking Services</a></li>
                        <li><a href="waterproofings.html">Waterproofing Services</a></li>
                        <li><a href="cleanings.html">Cleaning Services</a></li>
                        <li><a href="appliances.html">Appliances Services</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                    <h6 class="footer-title">Available Cities</h6>
                    <ul class="footer-list">
                        <li><a href="#">Lahore</a></li>
                        <li><a href="#">Kasure</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                    <h6 class="footer-title">Main Menu</h6>
                    <ul class="footer-list">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="services.html">Services</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="privacyp.html">Privacy Policy</a></li>
                        <li><a href="termsc.html">Terms & Conditions</a></li>
                        <li><a href="faqs.html">FAQs</a></li>
                        <li><a href="blog.html">Blog</a></li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-6 mb-4">
                    <h6 class="footer-title">Contact Us</h6>
                    <ul class="footer-list">
                        <li><a href="tel:+923001234567"><i class="fas fa-phone"></i> 0300-1234567</a></li>
                        <li><a href="mailto:info@fixcent.com"><i class="fas fa-envelope"></i> info@fixcent.com</a></li>
                        <li><a href="#"><i class="fab fa-facebook"></i> Facebook</a></li>
                        <li><a href="#"><i class="fab fa-twitter"></i> Twitter</a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i> Instagram</a></li>
                        <li><a href="#"><i class="fab fa-pinterest"></i> Pinterest</a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
                        <li><a href="#"><i class="fab fa-youtube"></i> YouTube</a></li>
                    </ul>
                </div>
            </div>

            <hr class="footer-divider">
            <div class="text-center pt-4">
                <p class="text-muted">&copy; 2026 FixNcent. All rights reserved. | Crafted with <i
                        class="fas fa-heart"></i> by FixNcent Team</p>
            </div>
        </div>
    </footer>
    <script src="js/script.js"></script>
    <script>
        document.querySelectorAll('.city-option').forEach(item => {
            item.addEventListener('click', function () {
                document.getElementById('selectedCity').innerText = this.innerText;
            });
        });
    </script>

    <script>
        document.getElementById("searchInput").addEventListener("keyup", function () {
            let value = this.value.toLowerCase();
            let items = document.querySelectorAll(".service-item");

            items.forEach(function (item) {
                let text = item.innerText.toLowerCase();
                item.style.display = text.includes(value) ? "" : "none";
            });
        });
    </script>
    <script>
        document.getElementById('cartSearchInput').addEventListener('keyup', function () {
            const value = this.value.toLowerCase();

            document.querySelectorAll('.cart-item-wrap').forEach(item => {
                item.style.display = item.innerText.toLowerCase().includes(value)
                    ? 'block'
                    : 'none';
            });
        });
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>




    <script src="js/ttsjs.js"></script>

</body>

</html>