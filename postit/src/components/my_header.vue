<script>

</script>

<template>
    
<header class="topbar d-flex align-items-center">
        <div class="container">
            <div class="header-start row align-items-center justify-content-between">
                <div class="col">
                    <RouterLink to="/"><img src="../../public/img/Our post-its.png" alt="Our post-its logo" class="space-logo zoom-effect"></RouterLink>
                </div>
            </div>
            <div class="header-mob row">
                <div class="">
                    <a href="">
                        <img src="../../public/img/Our post-its.png" alt="Our post-its logo"
                            class="space-logo-mob zoom-effect justify-content-center">
                    </a>
                </div>
            </div>
        </div>
    </header>
    

</template>


<style scoped>
    :root {
    --ui: #7c3bed;
    --soft: #f5f5f7;
    --line: #e6e6eb;
    --radius: 14px;
}

/* .header-start {
    border-style: solid ;
    border-width: 0.5px ;
}

.header-mob {
    border-style: solid ;
    border-width: 0.5px ;
} */

a{
    text-decoration: none;
}
header{
    height: 80px;
}
.topbar {
    border-bottom: 0.1px solid #e5e4e6;
    box-shadow: 0px 4px 6px rgba(180, 177, 177, 0.3);
    background: #fff;
    position: sticky;
    top: 0;
    z-index: 100;
    margin-bottom: 30px;
}

.space-logo {
    width: 200px;
    height: auto;
}

.space-logo-mob {
    width: 200px;
    height: auto;

}

@media(max-width:991px) {

    .header-start {
    display: none;
}

}

@media(min-width:490px) {



}

@media(min-width:991px) {

    .header-mob {
        display: none;
    }

}


.delete-postit {
    background-color: #ffffff;
    color: #fe0303;
    border-color: #fe0303;
    transition: all 0.5s;
}

.delete-postit:hover {
    background-color: #fe0303;
    color: #fff;
    border-color: #fe0303;
}

.add-postit {
    background-color: #7C3AED;
    color: #ffffff;
    border-color: #7C3AED;
    transition: all 0.5s;
}

.add-postit:hover {
    background-color: #ffffff;
    color: #7C3AED;
    border-color: #7C3AED;
}

.burger-menu-container {
    width: 40px;
    height: 40px;
}

.zoom-effect {
    transition: all 0.5s;
}

.zoom-effect:hover {
    transform: scale(1.2);

}
</style>