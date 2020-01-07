<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200107130920 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE user_event_result (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, event_result_id INT DEFAULT NULL, INDEX IDX_A13FCA43A76ED395 (user_id), INDEX IDX_A13FCA438132887E (event_result_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE event_result (id INT AUTO_INCREMENT NOT NULL, event_id INT NOT NULL, nb_to_approve INT DEFAULT 5 NOT NULL, admin_approved TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_21F3B64171F7E88B (event_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE user_event_result ADD CONSTRAINT FK_A13FCA43A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE user_event_result ADD CONSTRAINT FK_A13FCA438132887E FOREIGN KEY (event_result_id) REFERENCES event_result (id)');
        $this->addSql('ALTER TABLE event_result ADD CONSTRAINT FK_21F3B64171F7E88B FOREIGN KEY (event_id) REFERENCES event (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user_event_result DROP FOREIGN KEY FK_A13FCA438132887E');
        $this->addSql('DROP TABLE user_event_result');
        $this->addSql('DROP TABLE event_result');
    }
}
