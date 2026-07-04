const profileData = {
    "photo": "https://picsum.photos/800",
    "name": "Johnny Finch",
    "role": "Full Stack Developer",
    "description": "An experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success.",
    "skills": [
        "JavaScript",
        "Python",
        "React",
        "Node.js",
        "SQL"
    ],
    "links": [
        {
            "name": "Blog",
            "url": "https://holadevelopers.blog",
            "color": "#FAA275"
        },
        {
            "name": "Youtube",
            "url": "https://youtube.com/@JohnnyFinchDev",
            "color": "#ff0033"
        },
        {
            "name": "GitHub",
            "url": "https://github.com/johnnyfinchdev",
            "color": "#333333"
        }
    ],
    "projects": [
        {
            "photo": "https://picsum.photos/200",
            "name": "Project A",
            "description": "A web application that allows users to track their tasks and manage their time effectively.",
            "url": "https://github.com/johndoe/project-a"
        },
        {
            "photo": "https://picsum.photos/200",
            "name": "Project B",
            "description": "A mobile app that helps users monitor their fitness goals and progress.",
            "url": "https://github.com/johndoe/project-b"
        }
    ],
    "qr": "qr.png"
}

const maincontent = document.createElement("div")
maincontent.classList.add('mainContent')

//==========================
//         Profile
//==========================
const profileImg = document.getElementById('profileImg')
profileImg.src = profileData.photo

const profileDesc = document.getElementById('profileDesc')
profileDesc.innerText = profileData.description

const profileName = document.getElementById('profileName')
profileName.innerText = profileData.name

const profileRole = document.getElementById('profileRole')
profileRole.innerText = profileData.role


const profileSkills = document.getElementById('profileSkills')
for (let i = 0; i < profileData.skills.length; i++) {
    const skill = profileData.skills[i];
    
    const title = document.createElement('p')
    title.classList.add('titleSkill')
    title.innerText = skill

    profileSkills.appendChild(title)
}

const profileLinks = document.getElementById('profileLinks')
for (let i = 0; i < profileData.links.length; i++) {
    const link = profileData.links[i];

    const atag = document.createElement('a')
    atag.href = link.url
    atag.target = '_blank'

    const card = document.createElement('div')
    card.style.backgroundColor = link.color

    atag.appendChild(card)
    
    const title = document.createElement('p')
    title.classList.add('titleLink')
    title.innerText = link.name

    card.appendChild(title)


    profileLinks.appendChild(atag)
}

//==========================
//         Proyects
//==========================
const proyects = document.getElementById('proyects')
for (let i = 0; i < profileData.projects.length; i++) {
    const proyect = profileData.projects[i];

    const card = document.createElement('div')
    card.classList.add('proyectCard')
    card.title = proyect.description

    const img = document.createElement('img')
    img.src = proyect.photo
    img.alt = 'imagen del proyecto'
    img.classList.add('proyectImage')

    const title = document.createElement('p')
    title.innerText = proyect.name
    title.classList.add('proyectTitle')

    card.appendChild(img)
    card.appendChild(title)

    proyects.appendChild(card)
}

const qrCode = document.createElement('img')
qrCode.src = profileData.qr
qrCode.alt = 'codigo QR del perfil'
proyects.append(qrCode)


