    <footer>
        <div class="footer_end">
            <h2>TrueBartenders , 2020</h2>
            <h2> Tel. +37068389352</h2>
            <div class="media">
                <ul>
                    <li><a href="https://www.facebook.com/U%C5%BEkulisiai-Vilnius-108816780545894"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href="https://www.instagram.com/uzkulisiai.vilnius/"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="../../kontaktai/public/kontaktai.php"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
        <script>
            $(function() {
                var documentEl = $(document),
                    fadeElem = $('.content');
                documentEl.on('scroll', function() {
                    var currScrollPos = documentEl.scrollTop();
                    fadeElem.each(function() {
                        var $this = $(this),
                            elemOffsetTop = $this.offset().top;
                        if (currScrollPos > elemOffsetTop) $this.css('opacity', 1 - (currScrollPos-elemOffsetTop)/600);
                    });
                });
            });
        </script>
    </footer>
