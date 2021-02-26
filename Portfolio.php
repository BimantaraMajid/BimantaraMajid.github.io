<?php
$dir = "img/portfolio";

// Sort in ascending order - this is default
$a = scandir($dir,1);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bimantara Majid</title>
    <meta charset="UTF-8">
    <meta name="description" content="Civic - CV Resume">
    <meta name="keywords" content="resume, civic, onepage, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Favicon -->
    <link href="img/hero.jpg" rel="shortcut icon" />

    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:400,400i,600,600i,700" rel="stylesheet">

    <!-- Stylesheets -->
    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/font-awesome.min.css" />
    <link rel="stylesheet" href="css/flaticon.css" />
    <link rel="stylesheet" href="css/owl.carousel.css" />
    <link rel="stylesheet" href="css/magnific-popup.css" />
    <link rel="stylesheet" href="css/style.css" />

</head>

<body>

    <!-- Portfolio section start -->
    <section class="portfolio-section pt-5">
        <div class="container-fluid">
            <div class="portfolio-warp">
                <a href="index.html" class="fa-border "><i class="fa fa-chevron-left"></i> BACK</a>
                <br>
                <hr><br>
                <div class="row">
					<?php for ($i=0; $i < (count($a)-2); $i++) { ?>
                    <div class="col-xl-3 col-lg-6 col-md-6">
                        <div class="portfolio-item">
                            <a href="img/portfolio/<?= $a[$i]; ?>" class="set-bg port-pic" data-setbg="img/portfolio/<?= $a[$i]; ?>"></a>
                            <p>By : Majid</p>
                        </div>
                    </div>
                    <?php } ?>

                </div>
            </div>
        </div>
    </section>
    <!-- Portfolio section end -->

    <div class="row">
        <hr>
    </div>
    <!-- Footer section start -->
    <footer class="footer-section">
        <div class="container text-center">
            <div class="copyright">
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                Copyright &copy;<script>
                document.write(new Date().getFullYear());
                </script> All rights reserved | This template is made with <i class="fa fa-heart-o"
                    aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
            </div>
        </div>
    </footer>
    <!-- Footer section end -->


    <!--====== Javascripts & Jquery ======-->
    <script src="js/jquery-2.1.4.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/owl.carousel.min.js"></script>
    <script src="js/magnific-popup.min.js"></script>
    <script src="js/circle-progress.min.js"></script>
    <script src="js/main.js"></script>
</body>

</html>