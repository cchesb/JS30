const inputs = document.querySelectorAll('.controls input')

function handleInput(){
    const suffix = this.dataset.sizing || '';
    console.log(this.name)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)


}

inputs.forEach(input => input.addEventListener('input', handleInput))