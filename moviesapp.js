let movieList = []
$(function () {
   $('form').on('submit', function (e) {
      e.preventDefault()
      // grab input values
      let title = $('#title').val()
      let rating = $('#rating').val()

      // create new row and cells and delete button
      let movieData = { title, rating }
      let dataToAppend = createMovieData(movieData)

      // append new row, cells, and delete button to tbody
      movieList.push(movieData)
      $('tbody').append(dataToAppend)

      $('form').trigger('reset')
   })

   // event listener for delete button
   $('.table-body').on('click', '.delete-btn', function (e) {
      $(e.target).closest('tr').remove()
   })
})

function createMovieData(data) {
   return ` 
   <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
         <button class="delete-btn">Delete</button>
      </td>
   </tr>`
}


