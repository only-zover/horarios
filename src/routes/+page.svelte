<script>
    import '@picocss/pico/css/pico.min.css'
</script>
<header class="container">
    <h1>Horários</h1>
</header>
<main>
    <div class="container">
        <div>
            <label for="">
                Buscar
                <input type="text" placeholder="Matéria">
            </label>
            <div class="buttons">
                <a href="http://" role="button">Pesquisar</a>
                <div class="right-side-btn">
                    <a href="http://" role="button">Adicionar +</a>
                    <a class="outline secondary" href="http://" role="button">Deletar</a>
                </div>
            </div>
        </div>
        <br>
        <section class="grid">
            <table>
                <thead>
                  <tr>
                    <th scope="col">Identificação</th>
                    <th scope="col">Início</th>
                    <th scope="col">Término</th>
                    <th scope="col">Segunda</th>
                    <th scope="col">Terça</th>
                    <th scope="col">Quarta</th>
                    <th scope="col">Quinta</th>
                    <th scope="col">Sexta</th>
                </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">N2 - N3</th>
                    <td>19:30</td>
                    <td>21:10</td>
                  </tr>
                  <tr>
                    <th scope="row">N4 - N5</th>
                    <td>21:20</td>
                    <td>23:00</td>
                  </tr>
                </tbody>
              </table>
        </section>
    </div>
</main>
<footer>
    <div class="container">
        <p>Feito por <a href="https://github.com/only-zover" target="_blank">Zover</a>
</footer>

<style>
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>