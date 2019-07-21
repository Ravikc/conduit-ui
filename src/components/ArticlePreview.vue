<template>
  <div class="container my-4">
    <div class="row">
      <div class="col-1">
        <img
          class="profile-picture"
          src="https://static.productionready.io/images/smiley-cyrus.jpg"
        />
      </div>
      <div class="col-10">
        <div class="row">Heading</div>
        <div class="row">
          <small>Date</small>
        </div>
      </div>
      <div class="col-1">
        <button>Fav</button>
      </div>
    </div>
    <div class="row">
      <h4>Heading</h4>
    </div>
    <div class="row">
      <p>Description</p>
    </div>
    <div class="row">
      <div class="col-2">Read more..</div>
      <div class="offset-8 col-2 d-flex flex-row-reverse">
        <div>1</div>
        <div>2</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ArticlePreview"
};
</script>

<style scoped>
.profile-picture {
  border-radius: 50%;
  max-height: 40px;
  max-width: 40px;
}
</style>
