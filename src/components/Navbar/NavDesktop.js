import { Link } from 'react-router-dom'
import './NavDesktop.css'

const NavDesktop = () => {
    return ( 
        <nav className="navDesktop">
            
            <div className="d-flex" >
                <Link  to='/'>Places</Link>
                <Link  to='/'>About Us</Link>
            </div>
            <svg width="196" height="108" viewBox="0 0 196 108" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="162" cy="42" r="5" fill="white"/>
<circle cx="35" cy="47" r="5" fill="white"/>
<path d="M12.1016 94.6328L18.2188 85.2578C18.8828 85.2969 19.5117 85.3477 20.1055 85.4102C20.6992 85.4648 21.2188 85.5234 21.6641 85.5859C22.1875 85.6562 22.6719 85.7266 23.1172 85.7969V88.4922L20.9375 88V100.094L23.1172 99.6016V102.508C22.2891 102.672 21.4727 102.793 20.668 102.871C19.8633 102.949 19.0469 103.008 18.2188 103.047V90.1797L12.1016 99.6719L5.89062 90.1562V103.047C5.22656 103.008 4.59766 102.961 4.00391 102.906C3.41016 102.852 2.89062 102.793 2.44531 102.73C1.92188 102.66 1.4375 102.586 0.992188 102.508V99.6016L3.17188 100.094V87.9766L0.992188 88.4688V85.7734C1.4375 85.7031 1.92188 85.6328 2.44531 85.5625C2.89062 85.5 3.41016 85.4414 4.00391 85.3867C4.59766 85.3242 5.22656 85.2734 5.89062 85.2344L12.1016 94.6328ZM40.3203 98.2188C40.125 98.0469 39.8828 97.8789 39.5938 97.7148C39.3047 97.5508 38.9492 97.4062 38.5273 97.2812C38.1055 97.1484 37.6016 97.043 37.0156 96.9648C36.4375 96.8789 35.7578 96.8359 34.9766 96.8359C34.2812 96.8359 33.6211 96.8516 32.9961 96.8828C32.3789 96.9062 31.8359 96.9844 31.3672 97.1172C30.8984 97.2422 30.5273 97.4453 30.2539 97.7266C29.9805 98.0078 29.8438 98.3984 29.8438 98.8984V100.398C30.5312 100.508 31.2891 100.598 32.1172 100.668C32.9453 100.738 33.8672 100.773 34.8828 100.773C35.6953 100.773 36.5586 100.746 37.4727 100.691C38.3945 100.629 39.3438 100.508 40.3203 100.328V98.2188ZM35.0469 89.6406C35.4375 89.6406 35.9102 89.6602 36.4648 89.6992C37.0195 89.7383 37.5977 89.8086 38.1992 89.9102C38.8008 90.0039 39.3945 90.1367 39.9805 90.3086C40.5742 90.4727 41.1055 90.6914 41.5742 90.9648C42.0508 91.2305 42.4336 91.5508 42.7227 91.9258C43.0117 92.3008 43.1562 92.7422 43.1562 93.25V102.32C42.5 102.453 41.7578 102.566 40.9297 102.66C40.2188 102.746 39.3711 102.824 38.3867 102.895C37.4023 102.965 36.3047 103 35.0938 103C33.8906 103 32.6094 102.949 31.25 102.848C29.8984 102.746 28.4844 102.57 27.0078 102.32V98.1016C27.0078 97.6484 27.1133 97.2539 27.3242 96.918C27.543 96.5742 27.8398 96.2812 28.2148 96.0391C28.5898 95.7969 29.0312 95.5977 29.5391 95.4414C30.0469 95.2852 30.5938 95.1602 31.1797 95.0664C31.7656 94.9727 32.375 94.9102 33.0078 94.8789C33.6406 94.8398 34.2734 94.8203 34.9062 94.8203C35.8672 94.8203 36.6836 94.8828 37.3555 95.0078C38.0352 95.125 38.5977 95.2539 39.043 95.3945C39.5586 95.5664 39.9844 95.7578 40.3203 95.9688V94.0703C40.3203 93.75 40.2422 93.4766 40.0859 93.25C39.9297 93.0156 39.7188 92.8203 39.4531 92.6641C39.1875 92.5 38.8828 92.3711 38.5391 92.2773C38.1953 92.1758 37.8359 92.0977 37.4609 92.043C37.0859 91.9883 36.7031 91.9531 36.3125 91.9375C35.9297 91.9219 35.5703 91.9141 35.2344 91.9141C34.8828 91.9141 34.5078 91.9258 34.1094 91.9492C33.7109 91.9648 33.3125 92 32.9141 92.0547C32.5234 92.1094 32.1445 92.1875 31.7773 92.2891C31.418 92.3828 31.0977 92.5117 30.8164 92.6758C30.5352 92.8398 30.3086 93.0391 30.1367 93.2734C29.9727 93.5 29.8906 93.7734 29.8906 94.0938L26.9844 93.3438C26.9844 92.8203 27.1133 92.3672 27.3711 91.9844C27.6289 91.5938 27.9688 91.2617 28.3906 90.9883C28.8203 90.7148 29.3125 90.4922 29.8672 90.3203C30.4219 90.1406 30.9961 90.0039 31.5898 89.9102C32.1914 89.8086 32.7891 89.7383 33.3828 89.6992C33.9766 89.6602 34.5312 89.6406 35.0469 89.6406ZM49.5547 97.5625C49.5547 98 49.6133 98.3789 49.7305 98.6992C49.8477 99.0117 50.0078 99.2812 50.2109 99.5078C50.4141 99.7266 50.6445 99.9062 50.9023 100.047C51.168 100.188 51.4453 100.297 51.7344 100.375C52.0234 100.445 52.3164 100.496 52.6133 100.527C52.9102 100.551 53.1953 100.562 53.4688 100.562C54.4609 100.562 55.3633 100.434 56.1758 100.176C56.9883 99.918 57.7109 99.6016 58.3438 99.2266V89.6406L61.3672 89.875V103.586C61.3672 104.141 61.25 104.656 61.0156 105.133C60.7812 105.609 60.4414 106.02 59.9961 106.363C59.5508 106.715 59.0039 106.988 58.3555 107.184C57.707 107.379 56.9688 107.477 56.1406 107.477V105.438C56.4531 105.438 56.7422 105.406 57.0078 105.344C57.2734 105.281 57.5039 105.184 57.6992 105.051C57.9023 104.926 58.0586 104.766 58.168 104.57C58.2852 104.383 58.3438 104.164 58.3438 103.914V101.453C57.9766 101.68 57.6016 101.887 57.2188 102.074C56.8438 102.262 56.4492 102.426 56.0352 102.566C55.6211 102.699 55.1875 102.805 54.7344 102.883C54.2812 102.961 53.8047 103 53.3047 103C52.0938 103 51.0586 102.902 50.1992 102.707C49.3398 102.504 48.6328 102.207 48.0781 101.816C47.5312 101.418 47.1289 100.926 46.8711 100.34C46.6133 99.7539 46.4844 99.0703 46.4844 98.2891V89.875L49.5547 89.6406V97.5625ZM78.5 98.2188C78.3047 98.0469 78.0625 97.8789 77.7734 97.7148C77.4844 97.5508 77.1289 97.4062 76.707 97.2812C76.2852 97.1484 75.7812 97.043 75.1953 96.9648C74.6172 96.8789 73.9375 96.8359 73.1562 96.8359C72.4609 96.8359 71.8008 96.8516 71.1758 96.8828C70.5586 96.9062 70.0156 96.9844 69.5469 97.1172C69.0781 97.2422 68.707 97.4453 68.4336 97.7266C68.1602 98.0078 68.0234 98.3984 68.0234 98.8984V100.398C68.7109 100.508 69.4688 100.598 70.2969 100.668C71.125 100.738 72.0469 100.773 73.0625 100.773C73.875 100.773 74.7383 100.746 75.6523 100.691C76.5742 100.629 77.5234 100.508 78.5 100.328V98.2188ZM73.2266 89.6406C73.6172 89.6406 74.0898 89.6602 74.6445 89.6992C75.1992 89.7383 75.7773 89.8086 76.3789 89.9102C76.9805 90.0039 77.5742 90.1367 78.1602 90.3086C78.7539 90.4727 79.2852 90.6914 79.7539 90.9648C80.2305 91.2305 80.6133 91.5508 80.9023 91.9258C81.1914 92.3008 81.3359 92.7422 81.3359 93.25V102.32C80.6797 102.453 79.9375 102.566 79.1094 102.66C78.3984 102.746 77.5508 102.824 76.5664 102.895C75.582 102.965 74.4844 103 73.2734 103C72.0703 103 70.7891 102.949 69.4297 102.848C68.0781 102.746 66.6641 102.57 65.1875 102.32V98.1016C65.1875 97.6484 65.293 97.2539 65.5039 96.918C65.7227 96.5742 66.0195 96.2812 66.3945 96.0391C66.7695 95.7969 67.2109 95.5977 67.7188 95.4414C68.2266 95.2852 68.7734 95.1602 69.3594 95.0664C69.9453 94.9727 70.5547 94.9102 71.1875 94.8789C71.8203 94.8398 72.4531 94.8203 73.0859 94.8203C74.0469 94.8203 74.8633 94.8828 75.5352 95.0078C76.2148 95.125 76.7773 95.2539 77.2227 95.3945C77.7383 95.5664 78.1641 95.7578 78.5 95.9688V94.0703C78.5 93.75 78.4219 93.4766 78.2656 93.25C78.1094 93.0156 77.8984 92.8203 77.6328 92.6641C77.3672 92.5 77.0625 92.3711 76.7188 92.2773C76.375 92.1758 76.0156 92.0977 75.6406 92.043C75.2656 91.9883 74.8828 91.9531 74.4922 91.9375C74.1094 91.9219 73.75 91.9141 73.4141 91.9141C73.0625 91.9141 72.6875 91.9258 72.2891 91.9492C71.8906 91.9648 71.4922 92 71.0938 92.0547C70.7031 92.1094 70.3242 92.1875 69.957 92.2891C69.5977 92.3828 69.2773 92.5117 68.9961 92.6758C68.7148 92.8398 68.4883 93.0391 68.3164 93.2734C68.1523 93.5 68.0703 93.7734 68.0703 94.0938L65.1641 93.3438C65.1641 92.8203 65.293 92.3672 65.5508 91.9844C65.8086 91.5938 66.1484 91.2617 66.5703 90.9883C67 90.7148 67.4922 90.4922 68.0469 90.3203C68.6016 90.1406 69.1758 90.0039 69.7695 89.9102C70.3711 89.8086 70.9688 89.7383 71.5625 89.6992C72.1562 89.6602 72.7109 89.6406 73.2266 89.6406ZM85.4141 93.3203C85.3828 93.0703 85.3086 92.8594 85.1914 92.6875C85.082 92.5156 84.9609 92.375 84.8281 92.2656C84.6797 92.1328 84.5156 92.0234 84.3359 91.9375L85.6484 89.6406C85.9375 89.7422 86.2266 89.8789 86.5156 90.0508C86.7578 90.1992 87.0117 90.3906 87.2773 90.625C87.5508 90.8516 87.7891 91.1328 87.9922 91.4688C88.3828 91.2188 88.7812 90.9844 89.1875 90.7656C89.6016 90.5391 90.0312 90.3438 90.4766 90.1797C90.9297 90.0156 91.4023 89.8867 91.8945 89.793C92.3945 89.6914 92.9297 89.6406 93.5 89.6406C94.7031 89.6406 95.7344 89.7422 96.5938 89.9453C97.4609 90.1406 98.168 90.4375 98.7148 90.8359C99.2695 91.2266 99.6758 91.7148 99.9336 92.3008C100.191 92.8867 100.32 93.5703 100.32 94.3516V103H97.25V95.0781C97.25 94.6406 97.1914 94.2656 97.0742 93.9531C96.957 93.6328 96.7969 93.3633 96.5938 93.1445C96.3984 92.918 96.168 92.7344 95.9023 92.5938C95.6367 92.4531 95.3594 92.3477 95.0703 92.2773C94.7891 92.1992 94.5 92.1484 94.2031 92.125C93.9062 92.0938 93.625 92.0781 93.3594 92.0781C92.8594 92.0781 92.3828 92.1133 91.9297 92.1836C91.4766 92.2539 91.0469 92.3516 90.6406 92.4766C90.2344 92.5938 89.8516 92.7344 89.4922 92.8984C89.1328 93.0625 88.7969 93.2344 88.4844 93.4141V103H85.4141V93.3203ZM120.688 85.0938C121.469 85.0938 122.266 85.1328 123.078 85.2109C123.898 85.2812 124.695 85.4102 125.469 85.5977C126.242 85.7773 126.969 86.0312 127.648 86.3594C128.328 86.6797 128.922 87.0898 129.43 87.5898C129.945 88.082 130.352 88.6758 130.648 89.3711C130.945 90.0586 131.094 90.8672 131.094 91.7969C131.094 92.7422 130.965 93.5742 130.707 94.293C130.457 95.0117 130.102 95.6367 129.641 96.168C129.188 96.6992 128.645 97.1445 128.012 97.5039C127.387 97.8555 126.699 98.1406 125.949 98.3594C125.199 98.5703 124.402 98.7227 123.559 98.8164C122.715 98.9023 121.852 98.9453 120.969 98.9453C120.414 98.9453 119.863 98.9297 119.316 98.8984C118.77 98.8672 118.219 98.8281 117.664 98.7812V102.977H114.758V85.7734C114.93 85.7188 115.203 85.6523 115.578 85.5742C115.961 85.4961 116.41 85.4219 116.926 85.3516C117.449 85.2812 118.031 85.2227 118.672 85.1758C119.312 85.1211 119.984 85.0938 120.688 85.0938ZM121.531 87.6719C121.016 87.6719 120.523 87.6953 120.055 87.7422C119.586 87.7812 119.176 87.8281 118.824 87.8828C118.402 87.9453 118.016 88.0156 117.664 88.0938V96.1094C117.914 96.1641 118.191 96.2109 118.496 96.25C118.754 96.2891 119.055 96.3242 119.398 96.3555C119.742 96.3789 120.109 96.3906 120.5 96.3906C121.008 96.3906 121.543 96.3789 122.105 96.3555C122.676 96.3242 123.238 96.2578 123.793 96.1562C124.355 96.0547 124.887 95.9062 125.387 95.7109C125.895 95.5078 126.34 95.2422 126.723 94.9141C127.113 94.5781 127.422 94.1641 127.648 93.6719C127.883 93.1797 128 92.5859 128 91.8906C128 91.3125 127.906 90.8047 127.719 90.3672C127.531 89.9297 127.277 89.5547 126.957 89.2422C126.637 88.9297 126.262 88.6719 125.832 88.4688C125.41 88.2656 124.957 88.1055 124.473 87.9883C123.996 87.8711 123.504 87.7891 122.996 87.7422C122.496 87.6953 122.008 87.6719 121.531 87.6719ZM136.18 103H133.508V85.3984H136.18V103ZM153.688 98.2188C153.492 98.0469 153.25 97.8789 152.961 97.7148C152.672 97.5508 152.316 97.4062 151.895 97.2812C151.473 97.1484 150.969 97.043 150.383 96.9648C149.805 96.8789 149.125 96.8359 148.344 96.8359C147.648 96.8359 146.988 96.8516 146.363 96.8828C145.746 96.9062 145.203 96.9844 144.734 97.1172C144.266 97.2422 143.895 97.4453 143.621 97.7266C143.348 98.0078 143.211 98.3984 143.211 98.8984V100.398C143.898 100.508 144.656 100.598 145.484 100.668C146.312 100.738 147.234 100.773 148.25 100.773C149.062 100.773 149.926 100.746 150.84 100.691C151.762 100.629 152.711 100.508 153.688 100.328V98.2188ZM148.414 89.6406C148.805 89.6406 149.277 89.6602 149.832 89.6992C150.387 89.7383 150.965 89.8086 151.566 89.9102C152.168 90.0039 152.762 90.1367 153.348 90.3086C153.941 90.4727 154.473 90.6914 154.941 90.9648C155.418 91.2305 155.801 91.5508 156.09 91.9258C156.379 92.3008 156.523 92.7422 156.523 93.25V102.32C155.867 102.453 155.125 102.566 154.297 102.66C153.586 102.746 152.738 102.824 151.754 102.895C150.77 102.965 149.672 103 148.461 103C147.258 103 145.977 102.949 144.617 102.848C143.266 102.746 141.852 102.57 140.375 102.32V98.1016C140.375 97.6484 140.48 97.2539 140.691 96.918C140.91 96.5742 141.207 96.2812 141.582 96.0391C141.957 95.7969 142.398 95.5977 142.906 95.4414C143.414 95.2852 143.961 95.1602 144.547 95.0664C145.133 94.9727 145.742 94.9102 146.375 94.8789C147.008 94.8398 147.641 94.8203 148.273 94.8203C149.234 94.8203 150.051 94.8828 150.723 95.0078C151.402 95.125 151.965 95.2539 152.41 95.3945C152.926 95.5664 153.352 95.7578 153.688 95.9688V94.0703C153.688 93.75 153.609 93.4766 153.453 93.25C153.297 93.0156 153.086 92.8203 152.82 92.6641C152.555 92.5 152.25 92.3711 151.906 92.2773C151.562 92.1758 151.203 92.0977 150.828 92.043C150.453 91.9883 150.07 91.9531 149.68 91.9375C149.297 91.9219 148.938 91.9141 148.602 91.9141C148.25 91.9141 147.875 91.9258 147.477 91.9492C147.078 91.9648 146.68 92 146.281 92.0547C145.891 92.1094 145.512 92.1875 145.145 92.2891C144.785 92.3828 144.465 92.5117 144.184 92.6758C143.902 92.8398 143.676 93.0391 143.504 93.2734C143.34 93.5 143.258 93.7734 143.258 94.0938L140.352 93.3438C140.352 92.8203 140.48 92.3672 140.738 91.9844C140.996 91.5938 141.336 91.2617 141.758 90.9883C142.188 90.7148 142.68 90.4922 143.234 90.3203C143.789 90.1406 144.363 90.0039 144.957 89.9102C145.559 89.8086 146.156 89.7383 146.75 89.6992C147.344 89.6602 147.898 89.6406 148.414 89.6406ZM167.914 89.4297C168.562 89.4297 169.215 89.4609 169.871 89.5234C170.527 89.5859 171.156 89.6875 171.758 89.8281C172.359 89.9688 172.922 90.1445 173.445 90.3555C173.969 90.5664 174.422 90.8203 174.805 91.1172C175.195 91.4141 175.5 91.7578 175.719 92.1484C175.938 92.5312 176.047 92.9609 176.047 93.4375L173.047 93.8828C173.047 93.5469 172.902 93.2461 172.613 92.9805C172.324 92.707 171.941 92.4805 171.465 92.3008C170.988 92.1133 170.441 91.9727 169.824 91.8789C169.207 91.7773 168.57 91.7266 167.914 91.7266C167.289 91.7266 166.672 91.7734 166.062 91.8672C165.453 91.9531 164.906 92.0859 164.422 92.2656C163.945 92.4453 163.555 92.6719 163.25 92.9453C162.953 93.2109 162.805 93.5234 162.805 93.8828V98.7578C162.805 99.1172 162.953 99.4297 163.25 99.6953C163.555 99.9531 163.945 100.172 164.422 100.352C164.906 100.523 165.453 100.652 166.062 100.738C166.672 100.824 167.289 100.867 167.914 100.867C168.57 100.867 169.207 100.82 169.824 100.727C170.441 100.633 170.988 100.5 171.465 100.328C171.941 100.148 172.324 99.9297 172.613 99.6719C172.902 99.4062 173.047 99.1016 173.047 98.7578L176.047 99.5078C176.047 99.9297 175.938 100.316 175.719 100.668C175.5 101.02 175.195 101.336 174.805 101.617C174.422 101.891 173.969 102.129 173.445 102.332C172.922 102.535 172.359 102.703 171.758 102.836C171.156 102.969 170.527 103.066 169.871 103.129C169.215 103.199 168.562 103.234 167.914 103.234C167.266 103.234 166.613 103.199 165.957 103.129C165.309 103.066 164.684 102.969 164.082 102.836C163.48 102.703 162.918 102.535 162.395 102.332C161.879 102.129 161.426 101.891 161.035 101.617C160.652 101.336 160.352 101.023 160.133 100.68C159.914 100.328 159.805 99.9375 159.805 99.5078V93.4375C159.805 92.9609 159.914 92.5312 160.133 92.1484C160.352 91.7578 160.652 91.4141 161.035 91.1172C161.426 90.8203 161.879 90.5664 162.395 90.3555C162.918 90.1445 163.48 89.9688 164.082 89.8281C164.684 89.6875 165.309 89.5859 165.957 89.5234C166.613 89.4609 167.266 89.4297 167.914 89.4297ZM186.922 89.6406C187.32 89.6406 187.801 89.6602 188.363 89.6992C188.926 89.7383 189.508 89.8086 190.109 89.9102C190.719 90.0039 191.32 90.1406 191.914 90.3203C192.508 90.4922 193.039 90.7148 193.508 90.9883C193.984 91.2617 194.367 91.5938 194.656 91.9844C194.953 92.3672 195.102 92.8203 195.102 93.3438V97.3047H181.672V100.305C182.617 100.438 183.527 100.531 184.402 100.586C185.277 100.633 186.117 100.656 186.922 100.656C188.148 100.656 189.258 100.609 190.25 100.516C191.25 100.422 192.113 100.316 192.84 100.199C193.676 100.066 194.43 99.9141 195.102 99.7422V102.344C193.617 102.578 192.184 102.746 190.801 102.848C189.426 102.949 188.133 103 186.922 103C185.703 103 184.598 102.969 183.605 102.906C182.613 102.836 181.762 102.758 181.051 102.672C180.223 102.578 179.477 102.469 178.812 102.344V93.3438C178.812 92.8203 178.941 92.3672 179.199 91.9844C179.457 91.5938 179.801 91.2617 180.23 90.9883C180.66 90.7148 181.152 90.4922 181.707 90.3203C182.27 90.1406 182.852 90.0039 183.453 89.9102C184.055 89.8086 184.652 89.7383 185.246 89.6992C185.848 89.6602 186.406 89.6406 186.922 89.6406ZM181.672 95.4297H192.195V94.0703C192.195 93.75 192.117 93.4766 191.961 93.25C191.805 93.0156 191.594 92.8203 191.328 92.6641C191.07 92.5078 190.766 92.3828 190.414 92.2891C190.07 92.1875 189.711 92.1133 189.336 92.0664C188.961 92.0117 188.582 91.9766 188.199 91.9609C187.824 91.9453 187.469 91.9375 187.133 91.9375C186.781 91.9375 186.402 91.9453 185.996 91.9609C185.598 91.9766 185.195 92.0117 184.789 92.0664C184.383 92.1211 183.992 92.1992 183.617 92.3008C183.242 92.3945 182.91 92.5234 182.621 92.6875C182.332 92.8438 182.102 93.0391 181.93 93.2734C181.758 93.5 181.672 93.7734 181.672 94.0938V95.4297Z" fill="white"/>
<mask id="path-4-inside-1_0_1" fill="white">
<path d="M101.779 52.8799C102.117 51.3028 101.943 49.8192 101.484 48.6237H96.0107C95.872 49.4376 95.6811 51.0824 95.9845 52.8799C96.0626 53.3459 96.1753 53.8209 96.3315 54.2958C96.7478 55.5845 97.4764 56.8562 98.7167 57.8736C100 56.729 100.833 55.5082 101.336 54.2958C101.536 53.8208 101.683 53.3461 101.778 52.8799H101.779ZM82.324 42.4344C82.324 47.92 85.1689 52.7696 89.4969 55.6354C91.7 57.1021 94.2934 58.0432 97.0776 58.306C95.8806 57.0936 95.1781 55.6862 94.7878 54.3042H91.9862C91.0148 54.3042 90.1474 53.8805 89.5403 53.2275C89.0113 52.6597 88.6903 51.9133 88.6903 51.0824V50.4294C88.6903 49.5477 89.0546 48.7507 89.6444 48.1657C90.2429 47.5723 91.0668 47.2076 91.9862 47.2076H94.8398H102.429H105.725C106.315 47.2076 106.853 47.369 107.338 47.6404C108.336 48.1915 109.021 49.2344 109.021 50.4298V51.0827C109.021 52.2358 108.396 53.2362 107.46 53.8128C106.957 54.1182 106.367 54.3044 105.725 54.3044H102.889C102.42 55.6525 101.605 57.009 100.339 58.2978C102.958 58.0347 105.395 57.1447 107.503 55.8051C111.979 52.9564 114.954 48.0304 114.954 42.4346C114.954 36.61 111.736 31.523 106.957 28.742C104.519 27.3177 101.683 26.4868 98.6388 26.4868C95.4816 26.4868 92.5413 27.3855 90.0347 28.9116C85.4117 31.7179 82.324 36.7202 82.324 42.4346V42.4344ZM102.516 36.7115C103.201 35.3719 104.814 34.541 106.731 34.541C106.853 34.541 106.957 34.5756 107.078 34.5756C108.752 34.6691 110.305 35.3896 111.259 36.5935L111.597 37.0263L111.267 37.459C110.235 38.7986 108.735 39.6379 107.182 39.7736C107.035 39.7874 106.896 39.8013 106.749 39.8013C105.031 39.8013 103.505 38.928 102.551 37.4019L102.342 37.0626L102.516 36.715L102.516 36.7115ZM96.748 42.1971L96.9388 42.7482C97.1643 43.4011 97.8842 44.7491 98.6301 44.7491C99.376 44.7491 100.096 43.3586 100.313 42.7228L100.486 42.2056L101.041 42.2402C102.507 42.3164 102.95 42.0283 103.054 41.9348C103.115 41.8864 103.149 41.8164 103.149 41.6807C103.149 41.2909 103.479 40.9685 103.878 40.9685C104.277 40.9685 104.606 41.2905 104.606 41.6807C104.606 42.1896 104.415 42.6303 104.06 42.9694C103.548 43.4444 102.733 43.6647 101.501 43.6816C101.119 44.5464 100.191 46.1827 98.6388 46.1827C97.1123 46.1827 96.1842 44.6057 95.7853 43.741C94.9092 43.7894 93.7557 43.7064 93.0184 43.0714C92.602 42.7155 92.3852 42.2405 92.3852 41.681C92.3852 41.2912 92.7148 40.9688 93.1138 40.9688C93.5128 40.9688 93.8424 41.2908 93.8424 41.681C93.8424 41.825 93.8856 41.9185 93.9811 42.003C94.3194 42.291 95.1954 42.4011 96.1668 42.2744L96.748 42.1982V42.1971ZM95.1607 36.6013L95.499 37.0251L95.1694 37.4578C94.0419 38.9246 92.3592 39.7979 90.6505 39.7979C90.3643 39.7979 90.0868 39.7633 89.8179 39.7217C88.4475 39.4842 87.2505 38.6704 86.4526 37.3986L86.2444 37.0594L86.4265 36.7035C87.025 35.5334 88.3347 34.7534 89.9306 34.5754C90.1648 34.5477 90.4077 34.5338 90.6505 34.5338C92.4546 34.5407 94.1459 35.3138 95.1607 36.6026L95.1607 36.6013ZM105.725 52.8799C106.488 52.8799 107.139 52.4305 107.416 51.7861C107.512 51.566 107.564 51.3285 107.564 51.0739V50.421C107.564 50.1413 107.486 49.8872 107.373 49.6495C107.078 49.0478 106.454 48.6151 105.725 48.6151H103.01C103.401 49.8615 103.539 51.3282 103.262 52.8713H105.725L105.725 52.8799ZM91.9862 48.6152C90.9714 48.6152 90.1388 49.4206 90.1388 50.4211V51.074C90.1388 52.066 90.9628 52.8799 91.9862 52.8799H94.4842C94.2327 51.1333 94.3714 49.5564 94.5274 48.6237H91.9861L91.9862 48.6152ZM94.8918 21.7048C94.6143 21.7532 94.3367 21.7982 94.0592 21.8571C92.7061 22.1451 91.3964 22.5523 90.1561 23.0779C89.5403 23.332 88.9418 23.6208 88.3607 23.9258C81.6474 27.4952 77.0852 34.456 77.0852 42.4341C77.0852 50.6243 81.899 57.7123 88.8898 61.1969C91.8214 62.6551 95.126 63.4945 98.6301 63.4945C102.047 63.4945 105.265 62.6976 108.136 61.3071C115.257 57.8649 120.175 50.7091 120.175 42.4341C120.175 34.2949 115.413 27.2324 108.483 23.7224C107.945 23.4509 107.39 23.1885 106.827 22.9593C105.63 22.476 104.389 22.0944 103.097 21.8316C102.819 21.7693 102.542 21.7381 102.264 21.6959C101.987 21.6544 101.718 21.6114 101.44 21.5685C100.521 21.4494 99.5842 21.3649 98.6301 21.3649C97.6327 21.3649 96.6699 21.4584 95.7071 21.5851C95.447 21.6197 95.1694 21.6613 94.8918 21.7042V21.7048ZM98.6388 25.0622C100.226 25.0622 101.753 25.2824 103.218 25.6639C104.519 26.0032 105.76 26.4694 106.931 27.0714C112.56 29.9879 116.411 35.7702 116.411 42.4258C116.411 48.8354 112.837 54.4227 107.538 57.4326C104.918 58.9332 101.883 59.798 98.6388 59.798C95.2821 59.798 92.1423 58.8654 89.4622 57.2714C84.3189 54.2277 80.8668 48.7167 80.8668 42.4258C80.8668 35.8889 84.5878 30.183 90.0694 27.224C92.3332 26.0031 94.8918 25.2654 97.6153 25.1128C97.9622 25.099 98.2918 25.0644 98.6388 25.0644V25.0622ZM135.284 32.1925C132.24 32.099 129.707 34.0748 126.81 35.4483C122.994 37.2541 124.147 34.3291 124.147 34.3291L132.717 18.4236C127.955 13.6757 113.297 8.28343 113.297 8.28343L107.382 21.0434L98.6388 0L89.6097 21.018L83.7031 8.28343C83.7031 8.28343 69.0449 13.6842 64.2832 18.4236L72.8526 34.3376C72.8526 34.3376 73.9974 37.2626 70.1898 35.4567C67.2929 34.0832 64.7689 32.1078 61.7158 32.201C58.6628 32.2858 56 36.8472 56 41.3153C56 45.7834 57.1449 51.5487 61.9934 51.5487C66.8505 51.5487 69.227 49.0391 70.9444 48.1065C72.6617 47.1738 73.9888 48.2928 73.0867 49.9718C72.1847 51.642 63.5199 65.0464 63.5199 65.0464C63.5199 65.0464 72.1847 70.9982 83.3214 75L88.3694 62.5198C80.8408 58.8232 75.6454 51.2181 75.6454 42.4344C75.6454 33.3202 81.2311 25.4777 89.2107 21.9506C89.4362 21.8489 89.6704 21.7388 89.9046 21.6453C91.4138 21.0346 93.0184 20.5939 94.6663 20.3057L98.5781 10.2333L102.516 20.2887C104.12 20.5601 105.673 20.984 107.147 21.552C107.33 21.6213 107.512 21.6794 107.685 21.7556C115.882 25.1979 121.641 33.159 121.641 42.426C121.641 51.3028 116.341 58.9673 108.683 62.6215L113.679 75C124.815 70.9982 133.48 65.0464 133.48 65.0464C133.48 65.0464 124.815 51.6505 123.913 49.9718C123.011 48.293 124.338 47.1824 126.056 48.1065C127.773 49.0391 130.149 51.5487 135.007 51.5487C139.864 51.5487 141 45.7834 141 41.3153C141 36.8472 138.329 32.2858 135.284 32.1925ZM100.859 20.06L98.5694 14.2268L96.3056 20.0684C97.0689 19.9922 97.8495 19.95 98.6388 19.95C99.3847 19.95 100.131 19.9915 100.859 20.0601V20.06Z"/>
</mask>
<path d="M101.779 52.8799C102.117 51.3028 101.943 49.8192 101.484 48.6237H96.0107C95.872 49.4376 95.6811 51.0824 95.9845 52.8799C96.0626 53.3459 96.1753 53.8209 96.3315 54.2958C96.7478 55.5845 97.4764 56.8562 98.7167 57.8736C100 56.729 100.833 55.5082 101.336 54.2958C101.536 53.8208 101.683 53.3461 101.778 52.8799H101.779ZM82.324 42.4344C82.324 47.92 85.1689 52.7696 89.4969 55.6354C91.7 57.1021 94.2934 58.0432 97.0776 58.306C95.8806 57.0936 95.1781 55.6862 94.7878 54.3042H91.9862C91.0148 54.3042 90.1474 53.8805 89.5403 53.2275C89.0113 52.6597 88.6903 51.9133 88.6903 51.0824V50.4294C88.6903 49.5477 89.0546 48.7507 89.6444 48.1657C90.2429 47.5723 91.0668 47.2076 91.9862 47.2076H94.8398H102.429H105.725C106.315 47.2076 106.853 47.369 107.338 47.6404C108.336 48.1915 109.021 49.2344 109.021 50.4298V51.0827C109.021 52.2358 108.396 53.2362 107.46 53.8128C106.957 54.1182 106.367 54.3044 105.725 54.3044H102.889C102.42 55.6525 101.605 57.009 100.339 58.2978C102.958 58.0347 105.395 57.1447 107.503 55.8051C111.979 52.9564 114.954 48.0304 114.954 42.4346C114.954 36.61 111.736 31.523 106.957 28.742C104.519 27.3177 101.683 26.4868 98.6388 26.4868C95.4816 26.4868 92.5413 27.3855 90.0347 28.9116C85.4117 31.7179 82.324 36.7202 82.324 42.4346V42.4344ZM102.516 36.7115C103.201 35.3719 104.814 34.541 106.731 34.541C106.853 34.541 106.957 34.5756 107.078 34.5756C108.752 34.6691 110.305 35.3896 111.259 36.5935L111.597 37.0263L111.267 37.459C110.235 38.7986 108.735 39.6379 107.182 39.7736C107.035 39.7874 106.896 39.8013 106.749 39.8013C105.031 39.8013 103.505 38.928 102.551 37.4019L102.342 37.0626L102.516 36.715L102.516 36.7115ZM96.748 42.1971L96.9388 42.7482C97.1643 43.4011 97.8842 44.7491 98.6301 44.7491C99.376 44.7491 100.096 43.3586 100.313 42.7228L100.486 42.2056L101.041 42.2402C102.507 42.3164 102.95 42.0283 103.054 41.9348C103.115 41.8864 103.149 41.8164 103.149 41.6807C103.149 41.2909 103.479 40.9685 103.878 40.9685C104.277 40.9685 104.606 41.2905 104.606 41.6807C104.606 42.1896 104.415 42.6303 104.06 42.9694C103.548 43.4444 102.733 43.6647 101.501 43.6816C101.119 44.5464 100.191 46.1827 98.6388 46.1827C97.1123 46.1827 96.1842 44.6057 95.7853 43.741C94.9092 43.7894 93.7557 43.7064 93.0184 43.0714C92.602 42.7155 92.3852 42.2405 92.3852 41.681C92.3852 41.2912 92.7148 40.9688 93.1138 40.9688C93.5128 40.9688 93.8424 41.2908 93.8424 41.681C93.8424 41.825 93.8856 41.9185 93.9811 42.003C94.3194 42.291 95.1954 42.4011 96.1668 42.2744L96.748 42.1982V42.1971ZM95.1607 36.6013L95.499 37.0251L95.1694 37.4578C94.0419 38.9246 92.3592 39.7979 90.6505 39.7979C90.3643 39.7979 90.0868 39.7633 89.8179 39.7217C88.4475 39.4842 87.2505 38.6704 86.4526 37.3986L86.2444 37.0594L86.4265 36.7035C87.025 35.5334 88.3347 34.7534 89.9306 34.5754C90.1648 34.5477 90.4077 34.5338 90.6505 34.5338C92.4546 34.5407 94.1459 35.3138 95.1607 36.6026L95.1607 36.6013ZM105.725 52.8799C106.488 52.8799 107.139 52.4305 107.416 51.7861C107.512 51.566 107.564 51.3285 107.564 51.0739V50.421C107.564 50.1413 107.486 49.8872 107.373 49.6495C107.078 49.0478 106.454 48.6151 105.725 48.6151H103.01C103.401 49.8615 103.539 51.3282 103.262 52.8713H105.725L105.725 52.8799ZM91.9862 48.6152C90.9714 48.6152 90.1388 49.4206 90.1388 50.4211V51.074C90.1388 52.066 90.9628 52.8799 91.9862 52.8799H94.4842C94.2327 51.1333 94.3714 49.5564 94.5274 48.6237H91.9861L91.9862 48.6152ZM94.8918 21.7048C94.6143 21.7532 94.3367 21.7982 94.0592 21.8571C92.7061 22.1451 91.3964 22.5523 90.1561 23.0779C89.5403 23.332 88.9418 23.6208 88.3607 23.9258C81.6474 27.4952 77.0852 34.456 77.0852 42.4341C77.0852 50.6243 81.899 57.7123 88.8898 61.1969C91.8214 62.6551 95.126 63.4945 98.6301 63.4945C102.047 63.4945 105.265 62.6976 108.136 61.3071C115.257 57.8649 120.175 50.7091 120.175 42.4341C120.175 34.2949 115.413 27.2324 108.483 23.7224C107.945 23.4509 107.39 23.1885 106.827 22.9593C105.63 22.476 104.389 22.0944 103.097 21.8316C102.819 21.7693 102.542 21.7381 102.264 21.6959C101.987 21.6544 101.718 21.6114 101.44 21.5685C100.521 21.4494 99.5842 21.3649 98.6301 21.3649C97.6327 21.3649 96.6699 21.4584 95.7071 21.5851C95.447 21.6197 95.1694 21.6613 94.8918 21.7042V21.7048ZM98.6388 25.0622C100.226 25.0622 101.753 25.2824 103.218 25.6639C104.519 26.0032 105.76 26.4694 106.931 27.0714C112.56 29.9879 116.411 35.7702 116.411 42.4258C116.411 48.8354 112.837 54.4227 107.538 57.4326C104.918 58.9332 101.883 59.798 98.6388 59.798C95.2821 59.798 92.1423 58.8654 89.4622 57.2714C84.3189 54.2277 80.8668 48.7167 80.8668 42.4258C80.8668 35.8889 84.5878 30.183 90.0694 27.224C92.3332 26.0031 94.8918 25.2654 97.6153 25.1128C97.9622 25.099 98.2918 25.0644 98.6388 25.0644V25.0622ZM135.284 32.1925C132.24 32.099 129.707 34.0748 126.81 35.4483C122.994 37.2541 124.147 34.3291 124.147 34.3291L132.717 18.4236C127.955 13.6757 113.297 8.28343 113.297 8.28343L107.382 21.0434L98.6388 0L89.6097 21.018L83.7031 8.28343C83.7031 8.28343 69.0449 13.6842 64.2832 18.4236L72.8526 34.3376C72.8526 34.3376 73.9974 37.2626 70.1898 35.4567C67.2929 34.0832 64.7689 32.1078 61.7158 32.201C58.6628 32.2858 56 36.8472 56 41.3153C56 45.7834 57.1449 51.5487 61.9934 51.5487C66.8505 51.5487 69.227 49.0391 70.9444 48.1065C72.6617 47.1738 73.9888 48.2928 73.0867 49.9718C72.1847 51.642 63.5199 65.0464 63.5199 65.0464C63.5199 65.0464 72.1847 70.9982 83.3214 75L88.3694 62.5198C80.8408 58.8232 75.6454 51.2181 75.6454 42.4344C75.6454 33.3202 81.2311 25.4777 89.2107 21.9506C89.4362 21.8489 89.6704 21.7388 89.9046 21.6453C91.4138 21.0346 93.0184 20.5939 94.6663 20.3057L98.5781 10.2333L102.516 20.2887C104.12 20.5601 105.673 20.984 107.147 21.552C107.33 21.6213 107.512 21.6794 107.685 21.7556C115.882 25.1979 121.641 33.159 121.641 42.426C121.641 51.3028 116.341 58.9673 108.683 62.6215L113.679 75C124.815 70.9982 133.48 65.0464 133.48 65.0464C133.48 65.0464 124.815 51.6505 123.913 49.9718C123.011 48.293 124.338 47.1824 126.056 48.1065C127.773 49.0391 130.149 51.5487 135.007 51.5487C139.864 51.5487 141 45.7834 141 41.3153C141 36.8472 138.329 32.2858 135.284 32.1925ZM100.859 20.06L98.5694 14.2268L96.3056 20.0684C97.0689 19.9922 97.8495 19.95 98.6388 19.95C99.3847 19.95 100.131 19.9915 100.859 20.0601V20.06Z" stroke="white" stroke-width="2" mask="url(#path-4-inside-1_0_1)"/>
            </svg>
            <div className="d-flex">
                <Link  to='/'>Agents</Link>
                <Link  to='/'>Contact</Link>
            </div>

        </nav>
     );
}
 
export default NavDesktop;