<template>
  <p>
    Check out my anime, manga, movies, series, etc. ranking by below. Thank you!
  </p>
  
  <p flex="~ gap-2 wrap">
    <a
      href="#"
      target="_blank"
      class="group btn-yellow inline-block"
    >
      <div
        i-typcn-home
        group-hover="i-ph-lightning-fill text-yellow"
        transition-all duration-200 ease-out
      />
      Watch My Tear List -->
    </a> <br>
    <RouterLink to="/list" title="Tier List" class="group btn-yellow inline-block">
          <div 
            i-typcn-chart-area-outline
            group-hover="i-ph-lightning-fill text-yellow"
            transition-all duration-200 ease-out
       />
    </RouterLink>
  </p>
</template>
