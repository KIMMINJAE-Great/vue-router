<template>
  <h1>{{title}}</h1>
  <section class="content-section" id="portfolio">
            <div class="container px-4 px-lg-5">
                <div class="content-section-heading text-center">
                    <h3 class="text-secondary mb-0">Portfolio</h3>
                    <h2 class="mb-5">Recent Projects</h2>
                </div>
                <div class="row gx-0">
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Stationary</div>
                                    <p class="mb-0">A yellow pencil with envelopes on a clean, blue backdrop!</p>
                                </div>
                            </div>
                            <img class="img-fluid" src="../assets/img/portfolio-1.jpg" alt="..." />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Ice Cream</div>
                                    <p class="mb-0">A dark blue background with a colored pencil, a clip, and a tiny ice cream cone!</p>
                                </div>
                            </div>
                            <img class="img-fluid" src="../assets/img/portfolio-2.jpg" alt="..." />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Strawberries</div>
                                    <p class="mb-0">Strawberries are such a tasty snack, especially with a little sugar on top!</p>
                                </div>
                            </div>
                            <img class="img-fluid" src="../assets/img/portfolio-3.jpg" alt="..." />
                        </a>
                    </div>
                    <div class="col-lg-6">
                        <a class="portfolio-item" href="#!">
                            <div class="caption">
                                <div class="caption-content">
                                    <div class="h2">Workspace</div>
                                    <p class="mb-0">A yellow workspace with some scissors, pencils, and other objects.</p>
                                </div>
                            </div>
                            <img class="img-fluid" src="../assets/img/portfolio-4.jpg" alt="..." />
                        </a>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
import { ref } from 'vue'
export default {
  name : 'ToAbout',
  setup(){
    const title = ref('About')
  

    return{title}
  }
}
</script>

<style>
.content-section {
  padding-top: 7.5rem;
  padding-bottom: 7.5rem;
}

.content-section-heading h2, .content-section-heading .h2 {
  font-size: 3rem;
}
.content-section-heading h3, .content-section-heading .h3 {
  font-size: 1rem;
  text-transform: uppercase;
}
.portfolio-item {
  display: block;
  position: relative;
  overflow: hidden;
  max-width: 530px;
  margin: auto auto 1rem;
}
.portfolio-item .caption {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: rgba(33, 37, 41, 0.2);
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
}
.portfolio-item .caption .caption-content {
  color: #fff;
  margin: auto 2rem 2rem;
}
.portfolio-item .caption .caption-content h2, .portfolio-item .caption .caption-content .h2 {
  font-size: 0.8rem;
  text-transform: uppercase;
}
.portfolio-item .caption .caption-content p {
  font-weight: 300;
  font-size: 1.2rem;
}
@media (min-width: 992px) {
  .portfolio-item {
    max-width: none;
    margin: 0;
  }
  .portfolio-item .caption {
    transition: background-color 0.7s, -webkit-clip-path 0.25s ease-out;
    transition: clip-path 0.25s ease-out, background-color 0.7s;
    transition: clip-path 0.25s ease-out, background-color 0.7s, -webkit-clip-path 0.25s ease-out;
    -webkit-clip-path: inset(0px);
            clip-path: inset(0px);
  }
  .portfolio-item .caption .caption-content {
    transition: opacity 0.25s;
    margin-left: 5rem;
    margin-right: 5rem;
    margin-bottom: 5rem;
  }
  .portfolio-item img {
    transition: -webkit-clip-path 0.25s ease-out;
    transition: clip-path 0.25s ease-out;
    transition: clip-path 0.25s ease-out, -webkit-clip-path 0.25s ease-out;
    -webkit-clip-path: inset(-1px);
            clip-path: inset(-1px);
  }
  .portfolio-item:hover img {
    -webkit-clip-path: inset(2rem);
            clip-path: inset(2rem);
  }
  .portfolio-item:hover .caption {
    background-color: rgba(29, 128, 159, 0.9);
    -webkit-clip-path: inset(2rem);
            clip-path: inset(2rem);
  }
}
.col-lg-6 {
    flex: 1 0 auto;
    width: 50%;
  }
  caption {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: #6c757d;
  text-align: left;
}
</style>