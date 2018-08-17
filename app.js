document.addEventListener('DOMContentLoaded', () => {
    console.log('App loaded')

    const productOption = document.getElementById('product-option')
    const integrationOptions = document.getElementById('integration-option')

    const productSection = document.getElementById('product')
    const integrationSection = document.getElementById('integration')

    productOption.onclick = () => {
        productSection.scrollIntoView({
            behavior: 'smooth'
        })
    }

    integrationOptions.onclick = () => {
        integrationSection.scrollIntoView({
            behavior: 'smooth'
        })
    }
})