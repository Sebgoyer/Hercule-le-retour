var profil = {
    name: 'Hercule',
    inRelationship: true,
    job: 'Demi-dieu',
    age: 35,
    department: 75,
    arm: 60.5,
  };
  base.fillProfil(profil);
  
  // exo 3
  var friends = [
    'Jupiter',
    'Junon',
    'Alcmène',
    'Déjanire',
  ];
  base.printFriends(friends);
  base.setBestFriend(friends[0]);
  
 
  var titleElem = document.createElement('h1');
  titleElem.textContent = 'Vous consultez le profil de Hercule';
  titleElem.className = 'banner__title';
  var headerElem = document.getElementById('header-banner');
  headerElem.appendChild(titleElem);
  

  for (var index = 0; index < 12; index++) {
    base.displayWork(index);
  }
  

  var hour = base.getHour();
  var availabilityElem = document.getElementById('availability');
  if (hour > 20 || hour < 8) {
    availabilityElem.textContent = 'Non disponible';
    availabilityElem.classList.add('off');
  }
  else {
    availabilityElem.textContent = 'Disponible';
  }
  
 
  function nickname(firstname, suffix) {
    var result = firstname + '-du-' + suffix;
    return result;
  }
  var herculeNickname = nickname(profil.name, profil.department);
  var profilNameElem = document.querySelector('#profil-name');
  profilNameElem.textContent = herculeNickname;
  
 
  var togglerElem = document.getElementById('menu-toggler');
  function handleClick() {
    var bannerElem = document.getElementById('header-banner');
    bannerElem.classList.toggle('banner--open');
  }
  togglerElem.addEventListener('click', handleClick);
  

  var formElem = document.getElementById('contact');
  function handleSubmit(event) {
    event.preventDefault();
    alert('Hercule ne souhaite pas être dérangé');
  }
  formElem.addEventListener('submit', handleSubmit);
  

  function percent(value, total) {
    var result = value / total * 100;
    result = Math.round(result);
    return result;
  }
  var voteTotal = base.vote.hercule + base.vote.cesar;
  var herculePercent = percent(base.vote.hercule, voteTotal);
  var herculeElem = document.querySelector('#trends-hercule .people__popularity');
  var herculeBarElem = document.querySelector('#trends-hercule .people__bar');
  herculeElem.textContent = herculePercent + '%';
  herculeBarElem.style.width = herculePercent + '%';
  var cesarPercent = percent(base.vote.cesar, voteTotal);
  var cesarElem = document.querySelector('#trends-cesar .people__popularity');
  var cesarBarElem = document.querySelector('#trends-cesar .people__bar');
  cesarElem.textContent = cesarPercent + '%';
  cesarBarElem.style.width = cesarPercent + '%';
  

  var activitiesElem = document.getElementById('activities');
  activitiesElem.classList.remove('hidden');
  var tasksElem = activitiesElem.querySelector('.tasks');
  for (var index = 0; index < base.activities.length; index++) {
    var activity = base.activities[index];
    if (activity.finished && activity.author === 'Hercule') {
      var liElem = document.createElement('li');
      liElem.textContent = activity.title;
      liElem.className = 'tasks__item';
      var spanElem = document.createElement('span');
      spanElem.textContent = 'tâche accomplie';
      spanElem.className = 'tasks__info';
      liElem.appendChild(spanElem);
      tasksElem.appendChild(liElem);
    }
  }