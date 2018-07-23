package ua.sigma.pm.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.time.Instant;
import java.util.Objects;

/**
 * A Player.
 */
@Entity
@Table(name = "player")
public class Player implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "nick_name")
    private String nickName;

    @Column(name = "full_name")
    private String fullName;

    @Column(name = "address")
    private String address;

    @Column(name = "email")
    private String email;

    @Column(name = "mobile")
    private String mobile;

    @Column(name = "phone")
    private String phone;

    @Column(name = "contract_id")
    private String contractId;

    @Column(name = "game_account")
    private String gameAccount;

    @Column(name = "creation_date")
    private Instant creationDate;

    @Column(name = "unplaced")
    private Boolean unplaced;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserName() {
        return userName;
    }

    public Player userName(String userName) {
        this.userName = userName;
        return this;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getNickName() {
        return nickName;
    }

    public Player nickName(String nickName) {
        this.nickName = nickName;
        return this;
    }

    public void setNickName(String nickName) {
        this.nickName = nickName;
    }

    public String getFullName() {
        return fullName;
    }

    public Player fullName(String fullName) {
        this.fullName = fullName;
        return this;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAddress() {
        return address;
    }

    public Player address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getEmail() {
        return email;
    }

    public Player email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public Player mobile(String mobile) {
        this.mobile = mobile;
        return this;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getPhone() {
        return phone;
    }

    public Player phone(String phone) {
        this.phone = phone;
        return this;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getContractId() {
        return contractId;
    }

    public Player contractId(String contractId) {
        this.contractId = contractId;
        return this;
    }

    public void setContractId(String contractId) {
        this.contractId = contractId;
    }

    public String getGameAccount() {
        return gameAccount;
    }

    public Player gameAccount(String gameAccount) {
        this.gameAccount = gameAccount;
        return this;
    }

    public void setGameAccount(String gameAccount) {
        this.gameAccount = gameAccount;
    }

    public Instant getCreationDate() {
        return creationDate;
    }

    public Player creationDate(Instant creationDate) {
        this.creationDate = creationDate;
        return this;
    }

    public void setCreationDate(Instant creationDate) {
        this.creationDate = creationDate;
    }

    public Boolean isUnplaced() {
        return unplaced;
    }

    public Player unplaced(Boolean unplaced) {
        this.unplaced = unplaced;
        return this;
    }

    public void setUnplaced(Boolean unplaced) {
        this.unplaced = unplaced;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Player player = (Player) o;
        if (player.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), player.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Player{" +
            "id=" + getId() +
            ", userName='" + getUserName() + "'" +
            ", nickName='" + getNickName() + "'" +
            ", fullName='" + getFullName() + "'" +
            ", address='" + getAddress() + "'" +
            ", email='" + getEmail() + "'" +
            ", mobile='" + getMobile() + "'" +
            ", phone='" + getPhone() + "'" +
            ", contractId='" + getContractId() + "'" +
            ", gameAccount='" + getGameAccount() + "'" +
            ", creationDate='" + getCreationDate() + "'" +
            ", unplaced='" + isUnplaced() + "'" +
            "}";
    }
}
