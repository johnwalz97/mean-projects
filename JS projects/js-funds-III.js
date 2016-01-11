function personConstructor(name) {
    var person = {
        name: name,
        distance_travelled: 0,
        say_name: function(){console.log(this.name)},
        say_something: function(str){console.log(this.name+" says "+str)},
        walk: function(){alert(person.name+" is walking"); person.distance_travelled += 3},
        run: function(){alert(person.name+" is running"); person.distance_travelled += 10},
        crawl: function(){alert(person.name+" is crawling"); person.distance_travelled += 1}
    }
    return person;
}

function ninjaConstructor(name, cohort) {
    var ninja = {
        belts: ['Red Belt', 'Black Belt', 'Double Black Belt'],
        name: name,
        cohort: cohort,
        belt: 'Yellow Belt',
        level: 0,
        levelUp: function(){ninja.belt=ninja.belts[ninja.level]; ninja.level++},
    }
    return ninja;
}