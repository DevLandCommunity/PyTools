<script>
    let inputTextarea;
    let output;


        let runCode = () => {
            let oldtag = document.getElementById("user_code")
            try {
                oldtag.remove()
            } catch(err) {
                console.log(err)
            }
            

            let tag = document.createElement("script")
            tag.type = "text/python"
            tag.id = "user_code"
            tag.innerHTML = "from browser import document\n\ndef print(string):\r\n    document[\"output\"].innerHTML = document[\"output\"].innerHTML + '<span>' + string + '</span>'" + "\n\n" + inputTextarea.value
            document.body.appendChild(tag)
            brython()
        }
        

    
</script>

<div class="center">
    <div class=container>
        <h1>Python online</h1>
        <code class="language-python"><textarea spellcheck="false" bind:this={inputTextarea} value="print('Hello world!')"></textarea></code><br>
        <button on:click={runCode}>Run</button><br><br><br>
        <div id="output" class="output" bind:this={output}></div>
    </div>
    
</div>

<style>
    button {
        border: 0;
        background: var(--accent);
        color: white;
        padding: 20px;
        font-weight: bold;
        font-size: 1.2em;
        border-radius: 10px;
        cursor: pointer;
    }
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
        min-height: 20%;
        width: 90%;
        border-radius: 10px;
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