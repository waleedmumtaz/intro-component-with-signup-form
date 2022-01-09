<script>
  import Footer from './lib/footer.svelte'
  import MainContent from './lib/main-content.svelte'
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    rel="preconnect"
    href="https://fonts.gstatic.com"
    crossorigin="anonymous"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div
  class="min-h-screen bg-intro-mobile md:bg-intro-desktop bg-cstm-primary-red flex flex-col"
>
  <MainContent />
  <Footer />
</div>
