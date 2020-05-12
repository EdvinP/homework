<main>
    <div class="main-content">
        <div class="content">
            <div class="content_asset">Kontaktai</div>
            <div class="adress">Lietuva</div>
            <div class="contacts">Vilniaus g. 22</div>
            <div class="contacts">truebartenders@gmail.com</div>
            <div class="contacts">+37068389352</div>
            <div class="content_asset">Mus galite rasti!!</div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.4592183739855!2d25.27737751585311!3d54.68394618137977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd941182e7ffa1%3A0x5e766da7320fc300!2sVilniaus%20g.%2022%2C%20Vilnius%2001402!5e0!3m2!1slt!2slt!4v1587310509103!5m2!1slt!2slt" width="400" height="450" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
            </div>
        </div>
            <form class="form" action="../src/app.inc.php" method="POST">
                <?php
                if (isset($_GET['wrongname']) && $_GET['wrongname']==true){
                    echo "<div style='color:#F45724;'>Neteisingai įvestas vardas</div>";
                }
                ?>
                <input type="text" id="vardas" name="vardas" required placeholder="Jūsų vardas">
                <input type="email" id="email" name="email" required placeholder="Jūsų paštas">
                <textarea name="message" id="textarea" required placeholder="Jūsų žinutė" rows="10" cols="80"></textarea>
                <button name="submit" id="submit" value="siusti">Siusti </button>
                <?php
                if (isset($_GET['mailsend']) && $_GET['mailsend']==true){
                    echo "<div style='font-size:30px;'>Jūsų žinutė išsiųsta. Greitu metu su jumis susisieksime. </div>";
                }
                ?>
            </form>
    </div>
</main>
