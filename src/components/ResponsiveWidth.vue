<template>
  <!--
  Reusable Container Pattern
  "This is not as straightforward to reuse as the button, because 
  it’s not an entire element we can extract[.]...What we can do 
  in this case is to create a presentational container, which is a 
  container-type component that exists entirely for presentational purposes."
  -->

  <div class="w-[100%] md:w-[50%]">
    <slot />
  </div>
</template>