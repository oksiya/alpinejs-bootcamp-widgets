document.addEventListener('alpine:init', () => {
    Alpine.data('wordGameWidget', function() {
        return {
            sentence: '',
            longest: '',
            shortest: '',
            lengths: '',
            longestWord() {
                const words = this.sentence.trim().split(/\s+/);
                this.longest = words.reduce((a, b) => a.length > b.length ? a : b, '');
            },
            shortestWord() {
                const words = this.sentence.trim().split(/\s+/);
                this.shortest = words.reduce((a, b) => a.length < b.length ? a : b, words[0]);
            },
            wordLengths() {
                const words = this.sentence.trim().split(/\s+/);
                this.lengths = words.map(word => `${word} (${word.length})`).join(', ');
            }
        }
    })
})
