<template>
  <p>
    Check out my top 10 anime and manga ranking. Thank you!
  </p>
  
  <p flex="~ gap-2 wrap">
    <a
      href="#"
      target="_blank"
      class="group btn-yellow inline-block"
    >
      <div
        i-ph-lightning-duotone
        group-hover="i-ph-lightning-fill text-yellow"
        transition-all duration-200 ease-out
      />
      個人的な選択によるランキング 
    </a>
    <RouterLink to="/list" title="Tier List">
          <div 
            i-ph-lightning-duotone
            group-hover="i-ph-lightning-fill text-yellow"
            transition-all duration-200 ease-out
       />
    </RouterLink>
  </p>
</template>
