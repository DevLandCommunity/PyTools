<script>
    let inputTextarea;
    let output;

    import {escapeString} from '../stringEscaper.js'

    let escape = () => {
        console.log(escapeString(inputTextarea.value))
        document.getElementById("output").innerHTML = escapeString(inputTextarea.value)
    }
</script>

<div class="center">
    <div class=container>
        <h1>Python string escaper</h1>
        <code class="language-python"><textarea spellcheck="false" bind:this={inputTextarea} value={"Some\nCool\nText"}></textarea></code><br>
        <button on:click={escape}>Escape</button><br><br><br>
        <div id="output" class="output" bind:this={output}></div>
    </div>
    
</div>

<style>
    .container {
        width: 100%;
        height: 100%;
        text-align: center;
    }

    h1 {
        margin: 0;
    }

    .output {
        display: flex;
        margin: auto;
        flex-direction: column;
        padding: 20px;
        background-color: var(--background-alt);
        height: 20%;
        width: 90%;
        border-radius: 10px;
    }

    button {
        padding: 10px 20px;
        background-color: greenyellow;
        font-size: xx-large;
        border: 0;
        border-radius: 3px;
    }

    textarea {
        margin-top: 20px;
        resize: none;
        width: 90%;
        height: 50%;
        font-size: x-large;
        color: white;
        background-color: var(--background-alt);
        border-radius: 10px;
    }

    .center {
        display: flex;
        justify-content: center;
        height: 89vh;
        flex-flow: wrap;
    }
</style>