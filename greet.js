document.addEventListener('alpine:init', () => {
    Alpine.data('greetWidget', function() {
        return {
            name: '',
            language: 'English',
            greeting: '',
            greet() {
                const greetings = {
                    'English': 'Hello',
                    'Zulu': 'Sawubona',
                    'French': 'Bonjour',
                    'Sotho': 'Dumela'
                };
                this.greeting = greetings[this.language] + ', ' + this.name + '!';
            }
        }
    })
})
