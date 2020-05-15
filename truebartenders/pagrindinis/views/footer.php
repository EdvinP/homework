    <footer>
        <div class="footer_end">
            <h2>TrueBartenders , 2020</h2>
            <h2>Tel. +37068389352</h2>
            <div class="media">
                <ul>
                    <li>
                        <a href="https://www.facebook.com/U%C5%BEkulisiai-Vilnius-108816780545894"><i aria-hidden="true" class="fa fa-facebook"></i></a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/uzkulisiai.vilnius/"><i aria-hidden="true" class="fa fa-instagram"></i></a>
                    </li>
                    <li>
                        <a href="../../kontaktai/public/kontaktai.php"><i aria-hidden="true" class="fa fa-envelope"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <script>
            /*var yourAge = window.prompt('Please Enter your age:')
                if (yourAge < 21)
                    window.alert('You are' + ' ' + yourAge + 'years old, you muste be at least 21.');
                if (yourAge >= 21)
                    window.alert('You are' + ' ' + yourAge);
                if (yourAge < 21)
                    location.href = ("../error.html");*/
            $(document).ready(function() {
            $("body").fadeIn(2000);
            });
            function locateToAnotherPage(){
                location.replace("../../kontaktai/public/kontaktai.php")
            }
            function locateToServicesPage(){
                location.replace("../../paslaugos/public/paslaugos.php")
            }
            $(function() {
                var documentEl = $(document),
                    fadeElem = $('.fade-scroll');
                documentEl.on('scroll', function() {
                    var currScrollPos = documentEl.scrollTop();
                    fadeElem.each(function() {
                        var $this = $(this),
                            elemOffsetTop = $this.offset().top;
                        if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/900);
                    });
                });
            });
        </script>
    </footer>