<template>
    <div class="container">
        <h1>Türelem, türelem :)</h1>
        <h4>A képek majd szeptember végén várhatóak.
            Addig is <a href="https://drive.google.com/drive/u/0/folders/1sAkEtQBemDJaahgineo3CI0ZgvNskKpe"
                        target="_blank">itt</a> tudjátok megosztani az általatok készített fotókat illetve megnézni
            a mások által feltöltötteket.


        </h4>
        <br>
        <div class="iframe-wrapper">
            <iframe width="1120" height="630"
                    src="https://www.youtube.com/embed/videoseries?list=PLgbSLqBWfB-XcOO2Skklbc_k5_Qm_am5r"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
        </div>
        <br>

        <lingallery :iid.sync="currentId" :items="items" :responsive="true"/>
    </div>
</template>

<script>
    import Lingallery from 'lingallery';

    export default {

        name: 'Galery',
        components: {
            Lingallery,
        },
        data() {
            return {
                width: 600,
                height: 400,
                items: [
                    {
                        src: '/img/wedPhoto1.jpg',
                        thumbnail: '/img/wedPhoto1.jpg',
                        caption: 'Amatőr esküvői fotózgatásunk 1',
                        id: '1'
                    },
                    {
                        src: '/img/wedPhoto2.jpg',
                        thumbnail: '/img/wedPhoto2.jpg',
                        caption: 'Amatőr esküvői fotózgatásunk 2',
                        id: '2'
                    },
                    {
                        src: '/img/wedPhoto3.jpg',
                        thumbnail: '/img/wedPhoto3.jpg',
                        caption: 'Amatőr esküvői fotózgatásunk 3',
                        id: '3'
                    },
                    {
                        src: '/img/wedPhoto4.jpg',
                        thumbnail: '/img/wedPhoto4.jpg',
                        caption: 'Amatőr esküvői fotózgatásunk 4',
                        id: '4'
                    },
                    {
                        src: '/img/wedPhoto5.jpg',
                        thumbnail: '/img/wedPhoto5.jpg',
                        caption: 'Amatőr esküvői fotózgatásunk 5',
                        id: '5'
                    },
                    {
                        src: '/img/wedPhoto6.jpg',
                        thumbnail: '/img/wedPhoto6.jpg',
                        caption: 'Amatőr esküvői fotózgatásunk 6',
                        id: '6'
                    },
                    {
                        src: '/img/wedPhoto7.jpg',
                        thumbnail: '/img/wedPhoto7.jpg',
                        caption: 'Amatőr esküvői fotózgatásunk 7',
                        id: '7'
                    },
                    {
                        src: '/img/galleryPic1.jpg',
                        thumbnail: '/img/galleryPic1.jpg',
                        caption: 'Lánykérés után',
                        id: '15'
                    },
                    {
                        src: '/img/galleryPic2.jpg',
                        thumbnail: '/img/galleryPic2.jpg',
                        caption: 'Első közös véradás',
                        id: '8'
                    },
                    {
                        src: '/img/galleryPic3.jpg',
                        thumbnail: '/img/galleryPic3.jpg',
                        caption: 'Első közös forgatás',
                        id: '9'
                    },
                    {
                        src: '/img/galleryPic4.jpg',
                        thumbnail: '/img/galleryPic4.jpg',
                        caption: 'Májusfa 2019',
                        id: '10'
                    },
                    {
                        src: '/img/galleryPic5.jpg',
                        thumbnail: '/img/galleryPic5.jpg',
                        caption: 'Első karantén hajvágás',
                        id: '11'
                    },
                    {
                        src: '/img/galleryPic6a.jpg',
                        thumbnail: '/img/galleryPic6a.jpg',
                        caption: 'Közös túra',
                        id: '12'
                    },
                    {
                        src: '/img/galleryPic7.jpg',
                        thumbnail: '/img/galleryPic7.jpg',
                        caption: 'Sokadik közös véradás',
                        id: '13'
                    },
                    {
                        src: '/img/galleryPic8.jpg',
                        thumbnail: '/img/galleryPic8.jpg',
                        caption: 'Nekem a Balaton...',
                        id: '14'
                    }
                ],
                currentId: null

            }
        }
    }
</script>

<style scoped>
    .iframe-wrapper {
        position: relative;
        height: 0;
        padding-top: 56.25%;
        overflow: hidden;
    }

    .iframe-wrapper iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .container {
        padding-top: 3em;
    }

    @media (min-width: 1079px) {
        .container {
            padding-top: 5em;
        }
    }

    img {
        max-width: 50em;
        max-height: 25em;
    }

</style>