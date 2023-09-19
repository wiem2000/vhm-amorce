package com.example.vhm_amorce_backend.init;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Random;
import java.util.stream.Stream;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.vhm_amorce_backend.dao.PrmClssRepository;
import com.example.vhm_amorce_backend.dao.PrmFmlyRepository;
import com.example.vhm_amorce_backend.dao.PrmSbClssRepository;
import com.example.vhm_amorce_backend.dao.PrmSrvcRepository;
import com.example.vhm_amorce_backend.dao.PrmTgRepository;
import com.example.vhm_amorce_backend.dao.PrmTpRepository;
import com.example.vhm_amorce_backend.dao.PrmUsrRepository;
import com.example.vhm_amorce_backend.dao.PrmVlRepository;
import com.example.vhm_amorce_backend.entity.PrmClss;
import com.example.vhm_amorce_backend.entity.PrmFmly;
import com.example.vhm_amorce_backend.entity.PrmSbClss;
import com.example.vhm_amorce_backend.entity.PrmSrvc;
import com.example.vhm_amorce_backend.entity.PrmTg;
import com.example.vhm_amorce_backend.entity.PrmTp;
import com.example.vhm_amorce_backend.entity.PrmUsr;
import com.example.vhm_amorce_backend.entity.PrmVl;



@Service
@Transactional
public class InitServiceImpl implements IinitService {
	
	@Autowired
	private PrmFmlyRepository prmFmlyRepository;
	@Autowired
	private PrmClssRepository prmClssRepository;
	@Autowired
	private PrmSbClssRepository prmSbClssRepository;
	@Autowired
	private PrmTgRepository prmTgRepository;
	@Autowired
	private PrmTpRepository prmTpRepository;
	@Autowired
	private PrmVlRepository prmVlRepository;
	@Autowired
	private PrmUsrRepository prmUsrRepository;
	@Autowired
	private PrmSrvcRepository prmSrvcRepository;
	

	
	@Override
	public void initPrmFmly() {
		
		Stream.of("liste des racines","liste des paramètres","liste des applicationq").forEach(name->{
			PrmFmly prmFmly=new PrmFmly();
			prmFmly.setPrmFmly_Nm(name);
			Random random = new Random();
			prmFmly.setPrmFmly_EkEY((long) (random.nextInt(9999) + 100));
			prmFmlyRepository.save(prmFmly);
		});
	}
	
	@Override
	public void initPrmClss() {
		
		PrmFmly prmFmly=prmFmlyRepository.findById((long) 2).get();
		
		Stream.of("Environment","HIS","Network","Option","Program","Security").forEach(name->{
			PrmClss prmClss =new  PrmClss();
			prmClss.setPrmClssName(name);
			prmClss.setPrmFmly(prmFmly);
			Random random = new Random();
			prmClss.setClssRef((long) (random.nextInt(9999) + 100));
			
			prmClssRepository.save(prmClss);
		});
		
	}

	@Override
	public void initPrmSbClss() {
		// TODO Auto-generated method stub
		
		List<PrmClss> lstPrmClss=(List<PrmClss>) prmFmlyRepository.findById((long) 2).get().getLstPrmClss();
		Random random = new Random();
		
		PrmClss prmClss=lstPrmClss.get(0);
	   
		PrmSbClss prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("HIS");prmSbClss.setPrmClss(prmClss);
        prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
        
        prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("Interface");prmSbClss.setPrmClss(prmClss);
         random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
        
        prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("Server");prmSbClss.setPrmClss(prmClss);
        random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
        
        prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("System");prmSbClss.setPrmClss(prmClss);
        random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
        
        prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("VisionHM_OV");prmSbClss.setPrmClss(prmClss);
       random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
       
        prmClss=lstPrmClss.get(1);
	   
		 prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("Application");prmSbClss.setPrmClss(prmClss);
       prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
       
       prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("Identification");prmSbClss.setPrmClss(prmClss);
        random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
       
        prmClss=lstPrmClss.get(2);
        
       prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("Service");prmSbClss.setPrmClss(prmClss);
       random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
       
       prmClss=lstPrmClss.get(3);
       
       prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("Application");prmSbClss.setPrmClss(prmClss);
       random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
       
       prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("Client");prmSbClss.setPrmClss(prmClss);
      random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
        
 
      prmClss=lstPrmClss.get(4);
      
      prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("Client");prmSbClss.setPrmClss(prmClss);
     random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
       

     prmClss=lstPrmClss.get(5);
     
     prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("Authentification");prmSbClss.setPrmClss(prmClss);
     random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
     
     prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("Client");prmSbClss.setPrmClss(prmClss);
    random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
      
    prmSbClss = new PrmSbClss();prmSbClss.setPrmSbClss_Name("Password");prmSbClss.setPrmClss(prmClss);
   random = new Random(); prmSbClss.setPrmSbClss_KY((long) (random.nextInt(9999) + 100)); prmSbClssRepository.save(prmSbClss);
     
				
	
		
	}



	@Override
	public void initPrmTp() {
		// TODO Auto-generated method stub
		
		/*
		
		List<PrmClss> lstPrmClss=(List<PrmClss>) prmFmlyRepository.findById((long) 2).get().getLstPrmClss();
		Random random = new Random();
		
		PrmClss prmClss=lstPrmClss.get(0);List<PrmSbClss> lstPrmSbClss=(List<PrmSbClss>) prmClss.getLstPrmSbClss();
		
		PrmSbClss prmSbClss =lstPrmSbClss.get(3);
		
	   */
		
		 Random random = new Random();
		
  String[] tp = { "Admission", "Advncmnt", "Planning", "Print", "Rcptn", "Rdv", "Scheduler", "System", "VhmOV", "View",
		            };
   
  
       
		
		prmSbClssRepository.findAll().forEach(sbClss->{
			 int randomIndex=random.nextInt(3);
			   
			 for(int i=0;i<randomIndex;i++) {
			 
			 
			        PrmTp prmTp = new PrmTp();
			        prmTp.setPrmTpName(tp[random.nextInt(tp.length)]);
			        prmTp.setPrmSbClss(sbClss); // Utilisez la même famille de paramètres
			        
					
			        prmTp.setTpRef((long) (random.nextInt(9999) + 100)); // Définissez la classe parente
			    

			        prmTpRepository.save(prmTp);
			
			   
		     }
		});
		
	
	
	
	}
	
	
	@Override
	public void initPrmTg() {
		// TODO Auto-generated method stub
		
		prmTpRepository.findAll().forEach(tp->{
			
			   Stream.of("Param 1", "Param 2").forEach(tgName -> {
			        PrmTg prmTg = new PrmTg();
			        prmTg.setPrmTg(tgName);
			        prmTg.setPrmTp(tp); // Utilisez la même famille de paramètres
			        Random random = new Random();
					
			        prmTg.setTgRef((long) (random.nextInt(9999) + 100)); // Définissez la classe parente
			    

			        prmTgRepository.save(prmTg);
			    });
		
		});
		
		
		
	}
	@Override
	public void initPrmVl() {
		// TODO Auto-generated method stub
		int nbUsr=(int)prmUsrRepository.count();
		
		prmTgRepository.findAll().forEach(tg->{
			
			   Stream.of("val 1").forEach(val-> {
			        PrmVl prmVl = new PrmVl();
			        prmVl.setPrmVl_Dta(val);
			        prmVl.setPrmTg(tg); // Utilisez la même famille de paramètres
			    
			        
			        	
			        Random random = new Random();
				    List<PrmUsr> lstPrmUsr = new ArrayList();
			        
				    int randomNb = random.nextInt(nbUsr);
			        for(int i=0;i<2;i++) {
			        	
			        	
			        	int randomUsr = random.nextInt(nbUsr);
				        PrmUsr usr=prmUsrRepository.findAll().get(randomUsr);
					    lstPrmUsr.add(usr);
				       
				        
			        }
			        
			        
			        prmVl.setLstPrmUsr(lstPrmUsr);
			        
			        
			        prmVlRepository.save(prmVl);
			    });
		
		});
		
	}

	@Override
	public void initPrmUsr() {
		// TODO Auto-generated method stub
	    String[] firstNames = { "John", "Jane", "Robert", "Mary", "Michael", "Jennifer", "William", "Linda", "David", "Patricia",
	            "Richard", "Elizabeth", "Joseph", "Susan", "Thomas", "Jessica", "Charles", "Sarah", "Christopher", "Karen"};
	    String[] lastNames = { "Smith", "Johnson", "Brown", "Taylor", "Miller", "Anderson", "Wilson", "Moore", "Harris", "Clark",
	            "Lewis", "Young", "Hall", "Walker", "White", "King", "Scott", "Green", "Evans", "Baker"};
	    
	     prmSrvcRepository.findAll().forEach(srvc->{
	     
	    for(int i=0;i<10;i++) {
	    	 Random random = new Random();
	    
	      
	        String firstNameRandom = firstNames[random.nextInt(firstNames.length)];
	        String lastNamesRandom = lastNames[random.nextInt(lastNames.length)];
	       
	        PrmUsr prmUsr = new PrmUsr();
	        prmUsr.setPrmUsr_Vl("Dr "+firstNameRandom+" "+lastNamesRandom );
	        prmUsr.setPrmSrvc(srvc);

	        
	        prmUsrRepository.save(prmUsr);
	    }
	     
	     });
		
		
	}

	@Override
	public void initPrmSrvc() {
		// TODO Auto-generated method stub
		
		
			
			   Stream.of("Ophtalmologie", "Chirurgie","Pédiatrie","Neurologie","Cardiologie").forEach(name-> {
			        PrmSrvc prmSrvc = new PrmSrvc();
			        prmSrvc.setPrmSrvc_Nm(name);
			        Random random = new Random();
			        prmSrvc.setRefSrvc((long) (random.nextInt(9999) + 100)); // Utilisez la même famille de paramètres
			    
			    

			        prmSrvcRepository.save(prmSrvc);
			    });
		
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	



}
