package com.HarvestHub.HarvestHub.Repository;
import com.HarvestHub.HarvestHub.Entities.SampleEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;




@Repository
public interface SampleRepository extends MongoRepository<SampleEntity, Integer> {
}
