<template>
  <section class="info-page">
    <div class="info-container">

      <div class="profile-header">
        <img src="/Girasol.jpeg" alt="Foto de perfil" class="perfil-img" />
      </div>


      <div class="info-content">
        <h2>Información del Perfil</h2>
        <p><strong>Nombre:</strong> Karen Ibarra</p>
        <p><strong>Especialidad:</strong> Sistemas</p>
        <p><strong>Bio:</strong> Estudiante enfocada en desarrollo web y proyectos académicos.</p>
        <p><strong>Edad:</strong> 19</p>
        <p><strong>Intereses:</strong> Me gusta viajar y conocer nuevos lugares acompañada de quienes amo, disfruto los deportes.</p>
        <p><strong>situacion sentimental:</strong> En una relacion.</p>
      </div>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.info-page {
  display: flex;
  justify-content: center;
  padding: 20px;
}

/* Recuadro blanco principal */
.info-container {
  width: 100%;
  max-width: 900px;
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 20px rgba(10,12,20,0.06);
  position: relative;
  box-sizing: border-box;
  display: block;
}

/* Header donde está la imagen, alineada a la derecha */
.profile-header {
  display: flex;
  justify-content: flex-end; /* mueve la imagen a la derecha dentro del recuadro */
  margin-bottom: 12px;
}

/* Imagen de perfil dentro del recuadro */
.perfil-img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #5e15be; /* borde morado consistente con tu estilo */
  box-shadow: 0 4px 12px rgba(94,21,190,0.08);
}

/* Contenido de texto a continuación */
.info-content {
  padding-top: 6px;
}

.info-content h2 {
  margin: 0 0 8px 0;
  font-size: 1.25rem;
}

.info-content p {
  margin: 6px 0;
  color: #333;
  line-height: 1.4;
}


@media (max-width: 720px) {
  .perfil-img {
    width: 64px;
    height: 64px;
  }
  .info-container {
    padding: 14px;
  }
}
</style>
