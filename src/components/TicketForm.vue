<template>
  <div >
    <header>
      <img class="logo" src="https://content.codecademy.com/courses/vue-instances/ticket_logo.svg" alt="logo">
      <h1>TICKETBOX</h1>
    </header>
    <form v-on:reset="resetFields" v-on:submit.prevent="submitForm" v-on:submit="submitFields">
      <div class="form-row">
        <div class="form-field">
          <label for="first-name">First Name *</label>
          <input type="text" id="first-name" v-model.trim="firstName" v-bind:class="[requiredFieldClass, firstNameClasses]" />
        </div>
        <div class="form-field">
          <label for="last-name">Last Name *</label>
          <input type="text" id="last-name" v-model.trim="lastName" v-bind:class="[requiredFieldClass, lastNameClasses]" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-field">
          <label for="email">Email *</label>
          <input type="text" id="email" v-model.trim="email" v-bind:class="[requiredFieldClass, emailClasses]" />
        </div>
      </div>
      <div class="form-row">
        <div class="form-field">
          <label for="ticket-quantity">Ticket Quantity</label>
          <select id="ticket-quantity" v-model.number="ticketQuantity">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div class="form-field">
          <legend>Ticket Type</legend>
          <div>
            <input type="radio" id="general" value="general" v-model="ticketType" checked="checked">
            <label for="general">General Admission</label>
          </div>
          <div>
            <input type="radio" id="vip" value="vip" v-model="ticketType">
            <label for="vip">VIP</label>
          </div>
        </div>
      </div>
      <div class="form-row checkbox">
        <fieldset>
          <legend>How did you hear about this event?</legend>
          <div>
            <input type="checkbox" id="friend" value="friend" v-model="referrals">
            <label for="friend">Friend</label>
          </div>
          <div>
            <input type="checkbox" id="publication" value="publication" v-model="referrals">
            <label for="publication">Publication</label>
          </div>
          <div>
            <input type="checkbox" id="social-media" value="social" v-model="referrals">
            <label for="social-media">Social Media</label>
          </div>
        </fieldset>
      </div>
      <div class="form-row vertical">
        <label for="requests">Special requests  <span class="smallText">(Try 'meet and greet')</span></label>
        <textarea id="requests" v-model.trim="specialRequests"></textarea>
      </div>
      <div class="form-row vertical agreement checkbox">
        <fieldset>
          <legend>Purchase Agreement</legend>
          <p>I, {{ fullName }}{{commaMark}} wish to buy {{ ticketDescription }}. I understand that all ticket sales are final.</p>
          <input type="checkbox" name="agreement" id="agree" v-model="purchaseAgreementSigned" />
          <label v-bind:class="[purchaseAgreementSignedClasses]" for="agree">I Agree *</label>
        </fieldset>
      </div>
      <div class="form-row vertical">
        <label for="signature">Signature</label>
        <input id="signature" class="signature" v-model="fullName"/>
      </div>
      <div>
        <button type="reset" class="reset">Reset</button>
        <button type="submit" v-bind:disabled="!formIsValid" v-bind:class="{ active: formIsValid }" v-on:click="popUpDisplay = true">Confirm Tickets</button>
      </div>
    </form>
    <div class="popUpClass" v-show="popUpDisplay">
      <div class="popUpContent"> 
        <span class="closePopUp" v-on:click="closeDisplay">&times;</span>     
        <h1>Thank You!</h1>
        <p style="margin-bottom: 15px">Your purchase of {{ticketDescription}} has been processed. Enjoy the event!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
