import swal from "sweetalert2"

export default class NotificationService {
  static async confirmDelete() {
    let res = await swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    })
    if (res.value) {
      return true
    }
    return false
  }
  static async confirmLog() {
    let res = await swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log out!'
    })
    if (res.value) {
      return true
    }
    return false
  }


  static toast(title = "") {
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title,
      showConfirmButton: false,
      timer: 1500
    })
  }
}