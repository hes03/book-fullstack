package com.example.demo.service;

import java.util.List;
import java.util.Map;

import com.example.demo.dao.DeptDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.vo.DeptVO;

import lombok.extern.log4j.Log4j2;
//모델 계층 - 비즈니스 로직처리(업무 프로세스)
@Service
@Log4j2
public class DeptService {
    @Autowired
    private DeptDao deptDao;
    public List<Map<String, Object>> deptList(String dname) {
        log.info("deptList");
        List<Map<String, Object>> list = null;
        list = deptDao.deptList(dname);
        return list;
    }
    public int deptInsert(Map<String,Object> pmap) {
        log.info("deptInsert");
        int result = -1;
        result = deptDao.deptInsert(pmap);
        return result;
    }//end of deptInsert
    public int deptUpdate(Map<String,Object> pmap) {
        log.info("deptUpdate");
        int result = -1;
        result = deptDao.deptUpdate(pmap);
        return result;
    }
    public int deptDelete(DeptVO dvo) {
        log.info("deptDelete");
        int result = -1;
        result = deptDao.deptDelete(dvo);
        return result;
    }
}