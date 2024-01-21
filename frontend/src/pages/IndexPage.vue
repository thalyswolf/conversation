<template>
  <q-page>
    <div class="row">
      <div class='col-7 background__1'></div>
      <div class='col-5 background__2'>
        <q-card class="login__card">
          <q-card-section>
            <div class="text-h1 primary">Conversator</div>
            <div class="text-subtitle1">Gere um link para iniciar uma conversa</div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            <q-btn color="primary" label="INICIE UMA CONVERSA" class="btn__start" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  components: { },
  setup () {
    return { }
  }
})
</script>
