<template>
  <div class="bg-gradient-to-tr from-gray-800 to-gray-900 text-white min-h-screen">
    <header>
      <slot name="header"/>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>