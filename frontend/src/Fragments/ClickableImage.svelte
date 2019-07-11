<script>
    export let src;
    export let id;
</script>


<div>
    <a href={src}>
        <figure class="image is-128x128">
            <img {src} alt="Image {id}">
        </figure>
    </a>
</div>