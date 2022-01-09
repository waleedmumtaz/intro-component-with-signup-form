<script>
  let formFields = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  }

  let formFieldErrors = {
    firstName: '',
    lastName: '',
    emailAddress: '',
    password: '',
  }

  let valid = false

  const submitHandler = () => {
    valid = true

    // make sure first name is not empty and set a message on formFieldErrors
    if (formFields.firstName.length === 0) {
      valid = false
      formFieldErrors.firstName = 'First Name cannot be empty'
    } else {
      formFieldErrors.firstName = ''
    }

    // make sure last name is not empty and set a message on formFieldErrors
    if (formFields.lastName.length === 0) {
      valid = false
      formFieldErrors.lastName = 'Last Name cannot be empty'
    } else {
      formFieldErrors.lastName = ''
    }

    // validate email address against a regex and set error message on formFieldErrors
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(formFields.emailAddress)) {
      valid = false
      formFieldErrors.emailAddress = 'Looks like this is not an email'
    } else {
      formFieldErrors.emailAddress = ''
    }

    // make sure password is not empty and set a message on formFieldErrors
    if (formFields.password.length === 0) {
      valid = false
      formFieldErrors.password = 'Password cannot be empty'
    } else {
      formFieldErrors.password = ''
    }
  }
</script>

<main>
  <div class="pt-20 px-5 font-poppins text-center">
    <div class="text-white">
      <h1 class="text-3xl font-bold mb-5">Learn to code by watching others</h1>
      <p class="mb-10">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </p>
      <div class="mb-8">
        <button class="bg-cstm-accent-blue px-12 py-5 rounded-lg">
          <span class="font-semibold">Try it free 7 days</span> then $20/mo. thereafter
        </button>
      </div>
    </div>
    <div class="text-black bg-white text-left p-5 rounded-lg">
      <form on:submit|preventDefault={submitHandler}>
        <div class="relative">
          <label for="firstname" class="hidden">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
            bind:value={formFields.firstName}
            class={`${
              formFieldErrors.firstName.length > 0
                ? 'outline outline-2 outline-red-500'
                : ''
            } outline outline-2 outline-gray-200 rounded-md px-5 py-3 w-full mb-1`}
          />
          <img
            src="/assets/icon-error.svg"
            alt="error icon"
            class={`absolute top-3 right-3 ${
              formFieldErrors.firstName.length > 0 ? 'block' : 'hidden'
            }`}
          />
          <p class="text-sm mb-5 text-red-500 text-right">
            {formFieldErrors.firstName}
          </p>
        </div>
        <div class="relative">
          <label for="lastname" class="hidden">Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            bind:value={formFields.lastName}
            placeholder="Last Name"
            class={`${
              formFieldErrors.lastName.length > 0
                ? 'outline outline-2 outline-red-500'
                : ''
            } outline outline-2 outline-gray-200 rounded-md px-5 py-3 w-full mb-1`}
          />
          <img
            src="/assets/icon-error.svg"
            alt="error icon"
            class={`absolute top-3 right-3 ${
              formFieldErrors.lastName.length > 0 ? 'block' : 'hidden'
            }`}
          />
          <p class="text-sm mb-5 text-red-500 text-right">
            {formFieldErrors.lastName}
          </p>
        </div>
        <div class="relative">
          <label for="email" class="hidden">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email Address"
            bind:value={formFields.emailAddress}
            class={`${
              formFieldErrors.emailAddress.length > 0
                ? 'outline outline-2 outline-red-500'
                : ''
            } outline outline-2 outline-gray-200 rounded-md px-5 py-3 w-full mb-1`}
          />
          <img
            src="/assets/icon-error.svg"
            alt="error icon"
            class={`absolute top-3 right-3 ${
              formFieldErrors.emailAddress.length > 0 ? 'block' : 'hidden'
            }`}
          />
          <p class="text-sm mb-5 text-red-500 text-right">
            {formFieldErrors.emailAddress}
          </p>
        </div>
        <div class="relative">
          <label for="password" class="hidden">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            bind:value={formFields.password}
            placeholder="Password"
            class={`${
              formFieldErrors.password.length > 0
                ? 'outline outline-2 outline-red-500'
                : ''
            } outline outline-2 outline-gray-200 rounded-md px-5 py-3 w-full mb-1`}
          />
          <img
            src="/assets/icon-error.svg"
            alt="error icon"
            class={`absolute top-3 right-3 ${
              formFieldErrors.password.length > 0 ? 'block' : 'hidden'
            }`}
          />
          <p class="text-sm mb-5 text-red-500 text-right">
            {formFieldErrors.password}
          </p>
        </div>
        <button
          type="submit"
          class="bg-cstm-primary-green hover:brightness-110 text-white uppercase font-semibold w-full py-4 rounded-lg mb-5"
          >Claim your free trial</button
        >
      </form>
      <p class="text-gray-400 font-semibold text-center text-xs px-5">
        By clicking the button, you are agreeing to our <span
          class="text-cstm-primary-red">Terms and Services</span
        >
      </p>
    </div>
  </div>
</main>
