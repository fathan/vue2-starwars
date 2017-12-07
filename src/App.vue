<template>
  <div id="app">
    <AppHeader/>
    <br>
    <div class="container-fluid">
      <div class="row">
        <div class="col">
          <div class="card card-default">
            <div class="card-body">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <AppFooter/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppSidebar from './components/AppSidebar'
import AppFooter from './components/AppFooter'

export default {
  name: 'app',
  components: {
    AppHeader,
    AppSidebar,
    AppFooter
  }
}
</script>
