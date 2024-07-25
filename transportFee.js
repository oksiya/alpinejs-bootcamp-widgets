document.addEventListener('alpine:init', () => {
    Alpine.data('transportFeeWidget', function() {
        return {
            shift: '',
            fee: '',
            transportFee() {
                if (this.shift === 'morning') this.fee = 'R20';
                else if (this.shift === 'afternoon') this.fee = 'R10';
                else if (this.shift === 'night') this.fee = 'R0';
                else this.fee = 'Select a shift';
            }
        }
    })
})
