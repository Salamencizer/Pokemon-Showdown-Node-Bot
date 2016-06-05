/*
	Miscellaneous commands
*/

Settings.addPermissions(['pick', 'randomanswer']);
exports.commands = {
    'sqrt' : function(arg , by , room)
    {
          var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
         var d = arg;
         if(isNaN(d))
          text+='Please enter a number!';
         else if(isNaN(Math.sqrt(d)))
          text+='Please enter a positive number!';
        else
          text+='The square root of '+d+' is '+Math.sqrt(d);
        this.say(room,text);
    },
    'giveteams':function(arg,by,room)
    {
        var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
        text+='Spandan\'s teams: http://pastebin.com/pR6cCsha ';
        this.say(room,text);
    },
    'randmonoteam':function(arg,by,room)
    {
    	var types=["Fire","Ice","Rock","Grass","Fairy","Steel","Water","Normal","Fighting","Poison","Flying","Bug","Ground","Ghost","Dark","Dragon","Psychic","Electric","???"];
	    var rando  = Math.floor(Math.random() * 18);
	    this.say(room,"!randpoke 6,"+types[rando]+" type");
    },
    'decrypt': function(arg,by,room)
    {
         var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
          var sent = arg;
          var senti=dawg(sent);
          text=text+'The decrypted sentence is \''+senti+'\'.';
          this.say(room,text);
          function dawg(senti)
          {
              var sent='';
        senti=senti.toUpperCase();
        var a = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var b = new Array();
        var jj=0;
        for(var i=25;i>=0;i--)
        {
          b[i] = a[jj];
          jj++;
        }
        for(var ii=0;ii<senti.length;ii++)
        {
            if('A' <= senti.charAt(ii) && senti.charAt(ii) <= 'Z')
            {
                for(var j=0;j<=25;j++)
                    if(senti.charAt(ii)===a[j])
                        sent=sent+b[j];
            }
            else 
                sent=sent+senti.charAt(ii);
        }
        return sent;
          }
    },
    'cuberoot' : function(arg , by , room)
    {
          
          var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';

         var d = arg;
         if(isNaN(d))
          text+='Please enter a number!';
        else
          text+='The cube root of '+d+' is '+Math.pow(d,1/3);
        this.say(room,text);
          
    },
    'coin' : function(arg, by, room)
    {
         var rand = Math.random();
         var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';

         if(rand>0.0 && rand <= 0.5)
              text+='Heads';
         else
            text+='Tails';
         this.say(room,text);
    },
    dnd:'busy',
    busy : function(arg,by,room)
    {
        var text="",b="";
        if(by.charAt(0)=='+' || by.charAt(0)=='%' || by.charAt(0)=='@' || by.charAt(0)=='#' || by.charAt(0)=='&' || by.charAt(0)=='~' || by.charAt(0)==' ')
        {
            for(var i=1;i<by.length;i++)
            b+=by.charAt(i);
        }
        else 
        {
            b=by;
        }
        if(arg==="")
        text="Usage: .busy <reason> or .dnd <reason>";
        else if(arg.toLowerCase()==="no longer busy" || arg.toLowerCase()==="back" || arg.toLowerCase()==="not busy")
        text="__"+b+"__ is no longer busy.";
        else
        text="__"+b+"__ is now busy, Reason: ``"+arg+"``";
        this.say(room,text);
    },
    'f' : function(arg,by,room)
    {
        	if (this.roomType == 'battle' && (this.cmdToken=='h' || this.cmdToken=='H'))
        	this.say(room,'You too have fun!');
    },
    'ave' : function(arg,by,room)
    {
        	if (this.roomType == 'battle' && arg==="fun" && (this.cmdToken=='h' || this.cmdToken=='H'))
        	this.say(room,'You too have fun!');
    },
    'g' : function(arg,by,room)
    {
        	if (this.roomType == 'battle' && (this.cmdToken=='g' || this.cmdToken=='G'))
        	this.say(room,'Nicely played!');
    },
    'ood' : function(arg,by,room)
    {
        	if (this.roomType == 'battle' && arg==="game" && (this.cmdToken=='g' || this.cmdToken=='G'))
        	this.say(room,'Nicely played!');
    },
    'l' : function(arg,by,room)
    {
        	if (this.roomType == 'battle' && (this.cmdToken=='g' || this.cmdToken=='G'))
        	this.say(room,'Good Luck to you too, and have fun!!');
    },
    'ello':function(arg,by,room)
    {
        var rebuild = function(zom)
        {
            var k="";
  			for(var i=0;i<zom.length;i++)
  			{
  				if(zom.charAt(i)===' '||zom.charAt(i)==='-'||zom.charAt(i)==='.'||zom.charAt(i)==='/'||zom.charAt(i)==='+')
  					continue;
  				else 
  					k=k+zom.charAt(i);
  			}
  			return k.toLowerCase();
        }
        if(this.cmdToken=='h' || this.cmdToken=='H')
          {
        var text="";
        if(by.charAt(0)=='+' || by.charAt(0)=='%' || by.charAt(0)=='@' || by.charAt(0)=='#' || by.charAt(0)=='&' || by.charAt(0)=='~')
        {
            var b="";
            for(var i=1;i<by.length;i++)
            b+=by.charAt(i);
            text+='Hello '+b;
        }
        else
        text+='Hello '+by;
        if(rebuild(arg) =="rotomthepokedex")
        this.say(room,text);
          }
    },
    'eya':function(arg,by,room)
    {
        var rebuild = function(zom)
        {
            var k="";
  			for(var i=0;i<zom.length;i++)
  			{
  				if(zom.charAt(i)===' '||zom.charAt(i)==='-'||zom.charAt(i)==='.'||zom.charAt(i)==='/'||zom.charAt(i)==='+')
  					continue;
  				else 
  					k=k+zom.charAt(i);
  			}
  			return k.toLowerCase();
        }
        if(this.cmdToken=='h' || this.cmdToken=='H')
          {
        if(rebuild(arg)=="rotomthepokedex" || arg==="")
        {
        var text="";
        if(by.charAt(0)=='+' || by.charAt(0)=='%' || by.charAt(0)=='@' || by.charAt(0)=='#' || by.charAt(0)=='&' || by.charAt(0)=='~')
        {
            var b="";
            for(var i=1;i<by.length;i++)
            b+=by.charAt(i);
            text+='Heya '+b;
        }
        else
        text+='Heya '+by;
        this.say(room,text);
        }
          }
    },
     'encrypt' : function(arg,by,room) {
          var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
          var sent = arg;
          var senti=dawg(sent);
          text=text+'The encrypted sentence is \''+senti+'\'.';
          this.say(room,text);
          function dawg(senti)
          {
              var sent='';
        senti=senti.toUpperCase();
        var a = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var b = new Array();
        var jj=0;
        for(var i=25;i>=0;i--)
        {
          b[i] = a[jj];
          jj++;
        }
        for(var ii=0;ii<senti.length;ii++)
        {
            if('A' <= senti.charAt(ii) && senti.charAt(ii) <= 'Z')
            {
                for(var j=0;j<=25;j++)
                    if(senti.charAt(ii)===a[j])
                        sent=sent+b[j];
            }
            else 
                sent=sent+senti.charAt(ii);
        }
        return sent;
          }

     },
     'serebii' : function(arg,by,room)
     {
          var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
          text+='The link to Serebii: www.serebii.net';
            this.say(room,text);
     },
     'reverze' : function(arg , by , room)
     {
         var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
         var s = '';
         var y = '';
         var x = ' '+arg+' ';
         var ch='';
         for(var i=0;i<x.length;i++)
        { 
            ch=x.charAt(i);
            if(ch!=' ')
                y=y+ch;
            if(ch===' ')
            {
                s=y+" "+s;
                y="";
                //continue;
            }
        }
        text+='The reversed sentence is: \''+s+'\'.';
        this.say(room,text);
     },
	choose: 'pick',
	pick: function (arg) {
		var choices = arg.split(",");
		choices = choices.filter(function (i) {return (toId(i) !== '');});
		if (choices.length < 2) return this.pmReply(this.trad('err'));
		var choice = choices[Math.floor(Math.random() * choices.length)];
		this.restrictReply(Tools.stripCommands(choice), 'pick');
	},
	
	'8ball': 'randomanswer',
	helix: 'randomanswer',
	randomanswer: function () {
		var answers = this.trad('answers');
		if (!answers || !answers.length) return;
		this.restrictReply(answers[Math.floor(Math.random() * answers.length)], 'randomanswer');
	},
	
	'randtype':function(arg,by,room)
	{
	    var text = this.hasRank(by, '+%@#&~') || room.charAt(0) === ',' ? '' : '/pm ' + by + ', ';
	    var types=["Fire","Ice","Rock","Grass","Fairy","Steel","Water","Normal","Fighting","Poison","Flying","Bug","Ground","Ghost","Dark","Dragon","Psychic","Electric","???"];
	    var rando  = Math.floor(Math.random() * 18);
	    text=types[rando];
	    this.say(room,text);
	},
	
	roulette:'range',
	range:function(arg,by,room)
	{
	    var baba=false;
	    if(arg!="")
	    {
	    var choices = arg.split(",");
	    var rando=0;
	    var limit1 = parseInt(choices[0]);
	    var limit2 = parseInt(choices[1]);
	    var text="Please enter a number as argument.";
	    if(choices.length>2)
	    {
	        this.say(room,"Sorry, you have to enter **two numbers only** as an argument.");
	        baba=true;
	    }
	    if(choices.length===2)
	    {
	    if(limit1>limit2)
	    rando  = Math.floor(Math.random() * ((limit1)-(limit2-1)))+limit2;
	    else if(limit2>limit1)
	    rando  = Math.floor(Math.random() * ((limit2)-(limit1-1)))+limit1;
	    else
	    rando=limit1;
	    }
	    else if(choices.length===1)
	    {
	       var rando  = Math.floor(Math.random() * parseInt(choices[0]));
	    }
	    if(!isNaN(rando) && !baba)
	    this.say(room,""+rando);
	    else if(isNaN(rando))
	    this.say(room,text);
	    }
	    else
	    this.say(room,"**Usage**: .roulette/.range <lower limit>,<upper limit>")
	},

	usagestats: 'usage',
	usage: function () 
	{
		this.restrictReply(this.trad('stats') + ': http://www.smogon.com/stats/', 'info');
	},
	'hp':function(arg,by,room)
    {
    	var ivs = arg.split("/");
    	var b = true;
    	for(var i=0;i<5;i++)
    	{
    		if(ivs[i]>31||ivs[i]<0||ivs.length!=6)
    		{
    			b=false;
    			break;
    		}
    	}
    	if(b)
    	{
	    	var types = ['Fighting','Flying','Poison','Ground','Rock','Bug','Ghost','Steel','Fire','Water','Grass','Electric','Psychic','Ice','Dragon','Dark'];
	    	var getBit = function(val)
	    	{
	    		if(val%2!=0)
	    			return 1;
	    		else
	    			return 0;
	    	}
	    	var value = Math.floor(((getBit(ivs[0])+(2*getBit(ivs[1]))+(4*getBit(ivs[2]))+(8*getBit(ivs[3]))+(16*getBit(ivs[4]))+(32*getBit(ivs[5])))*15)/63);
	    	this.say(room,"the Hidden Power for the following spread is: "+types[value]);
	    }
	    else
	    {
	    	this.say(room,"Error: IVs can't be less than 0, more than 31")
	    }
    },
		
	'note':function(arg,by,room)
	{
		if(arg!='')
		{
			var rom,b;
			if(room.charAt(0)==',')rom="PMs";
			else
				rom=room;
			if(by.charAt(0)=='+' || by.charAt(0)=='%' || by.charAt(0)=='@' || by.charAt(0)=='#' || by.charAt(0)=='&' || by.charAt(0)=='~' || by.charAt(0)==' ')
        {
            for(var i=0;i<by.length;i++)
            {
            if(i!=0)
            b+=by.charAt(i);
        	else
        		b='-';
        	}
        }
			console.log(b.green+" Notes: \""+arg.yellow+"\""+" in room: "+rom.yellow);
			this.say(room,"Your message has successfully been logged on Abyssal Bot's console.");
		}
		else
		{
			this.say(room,"Usage: ``.note <Message>``. Logs a message to Abyssal Bot's console, so that Spandan can read it. Use it to log bugs reports to the console when Spandan is away.");
		}
	},
	
};
