<template>
  <nav class="bg-white shadow-sm px-6 py-4 flex items-center justify-between">
    <RouterLink to="/" class="text-xl font-bold text-gray-800">dev lantern</RouterLink>

    <ul class="flex gap-6 text-sm font-medium text-gray-600">
      <li><RouterLink to="/"          active-class="text-blue-600" class="hover:text-blue-500">Home</RouterLink></li>
      <li><RouterLink to="/about"     active-class="text-blue-600" class="hover:text-blue-500">About</RouterLink></li>
      <li><RouterLink to="/community" active-class="text-blue-600" class="hover:text-blue-500">Community</RouterLink></li>
      <li><RouterLink to="/contact"   active-class="text-blue-600" class="hover:text-blue-500">Contact</RouterLink></li>
    </ul>
  </nav>
</template>