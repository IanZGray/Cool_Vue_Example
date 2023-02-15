const app = new Vue({
  el: '#app',
  data: {
    firstName: '',
    lastName: '',
    email: '',
    ticketQuantity: 1,
    ticketType: 'general',
    referrals: [],
    specialRequests: '',
    purchaseAgreementSigned: false,
    requiredFieldClass: 'required',
    popUpDisplay: 'none',
  },
  computed: {
    fullName: {
      get: function() {
        if (this.firstName && this.lastName) {
          return this.firstName + ' ' + this.lastName;
        } else {
          return this.firstName || this.lastName;
        }
      },
      set: function(newFullName) {
        const names = newFullName.split(' ');

        if (names.length === 2) {
          this.firstName = names[0];
          this.lastName = names[1];
        }
        
        if (names.length <= 1) {
          this.firstName = names[0] || '';
          this.lastName = '';
        }
      }
    },    
    commaMark: function() {
      if (this.fullName) {
        return ','
      } else {
        return ''
      }
    },
    ticketDescription: function() {
      let readableTicketType = 'General Admission';
      if (this.ticketType === 'vip') {
        readableTicketType = 'VIP';
      }

      let ticketPluralization = 'tickets';
      if (this.ticketQuantity === 1) {
        ticketPluralization = 'ticket';
      }

      return this.ticketQuantity + ' ' + readableTicketType + ' ' + ticketPluralization;
    },
    emailIsValid: function() {
      return this.email.includes('@');
    },
    formIsValid: function() {
      return this.firstName && this.lastName && this.emailIsValid && this.purchaseAgreementSigned;
    },
    emailClasses: function() {
      return {
      touched: this.email.length !== 0,
      invalid: this.email && !this.emailIsValid
      };
    },
    firstNameClasses: function(){
      return {
        touched: this.firstName.length !== 0,
      }
    },
    lastNameClasses: function(){
      return {
        touched: this.lastName.length !== 0,
      }
    },
    purchaseAgreementSignedClasses: function(){
      return {
        untouched: this.purchaseAgreementSigned === false,
        touched: this.purchaseAgreementSigned === true
      }
    }
  },
  watch: {
    specialRequests: function(newRequests, oldRequests) {
      if (newRequests.toLowerCase().includes('meet and greet') || 
          newRequests.toLowerCase().includes('meet-and-greet')) {
        this.ticketType = 'vip';
      }
    }
  },
  methods: {
    resetFields: function() {
      this.firstName = '';
      this.lastName = '';
      this.email = '';
      this.ticketQuantity = 1;
      this.ticketType = 'general';
      this.referrals = [];
      this.specialRequests = '';
      this.purchaseAgreementSigned = false;
    },
    submitFields: function() {
      this.popUpDisplay = 'block'
    },
    closeDisplay: function() {
      this.popUpDisplay = 'none'
      this.resetFields()
    }
  }
});