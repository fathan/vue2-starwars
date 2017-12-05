<template>
  <div id="app">
    <Header/>
    <Sidebar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    Footer
  }
}
</script>
