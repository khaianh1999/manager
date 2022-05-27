<template>
  <div id="home_page" class="">
    <div class="home_page__header flex justify-around pt-3 items-center">
      <div class="home_page__header--left">
        <h1>Dashboard</h1>
        <span>thứ 5 26/5/2022</span>
      </div>
      <div class="home_page__header--right">
        <div class="flex justify-center">
          <div class="xl:w-96">
            <div
              class="
                relative
                flex flex-wrap
                items-center
                w-full
              "
            >
            <i class="fa-solid fa-magnifying-glass absolute left-4 text-slate-500 focus:border-blue-600"></i>
              <input
                type="search"
                class="
                  block
                  w-full
                  border border-solid border-gray-300
                  focus:text-gray-700
                  focus:bg-white
                  focus:border-blue-600
                  focus:outline-none
                  rounded-3xl
                  p-3
                  indent-7
                "
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
#home_page{
  width: calc(100% - 240px);
  margin-left: 240px;
}
</style>