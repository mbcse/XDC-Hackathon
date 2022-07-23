/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

async function addEvent (e) {
  e.preventDefault()
  const form = $('#add-event-form')[0]
  console.log(form.enctype)
  const formData = new FormData(form)

  requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': form.enctype },
    withCredentials: true
  }
  //   const response = await fetch('/user/event', requestOptions)
  //   const responseData = response.json()
  const response = await axios.post('/user/event', formData, requestOptions)
  console.log(response)
}

$('#add-event-button').click(addEvent)
