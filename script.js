<script>
    function sim() 
        alert("Te amo muito ")
        location.href = "https://music.youtube.com/watch?v=ORrFJ63nlcA";
    

    function desvia(btn) 
        btn.style.position = 'absolute';
        btn.style.bottom = geraPosicao(10, 90);
        btn.style.left = geraPosicao(10, 90);
        console.log('opa, desviei...');
    

    function geraPosicao(min, max) 
        return (Math.random() * (max - min) + min) + "%";
    

</script>