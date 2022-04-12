<script type="text/javascript">
    let isNight = localStorage.getItem('night') || false;
    if (isNight.toString() === 'true') {
        document.documentElement.classList.add('night');
    }
</script>